import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function read(relativePath) {
  return readFile(new URL(relativePath, projectRoot), "utf8");
}

test("keeps the official institutional identity", async () => {
  const [layout, home, siteData] = await Promise.all([
    read("app/layout.tsx"),
    read("app/page.tsx"),
    read("components/site-data.ts"),
  ]);
  const source = `${layout}\n${home}\n${siteData}`;

  assert.match(source, /Instituto de Formação Psicanalítica Cida Freitas/);
  assert.match(source, /Acolher para escutar/);
  assert.match(source, /Formar um psicanalista exige mais do que transmitir teoria/);
});

test("keeps all institutional routes", async () => {
  const routes = [
    "instituto",
    "formacao-psicanalitica",
    "metodologia",
    "cursos",
    "inscricao",
    "contato",
    "politica-de-privacidade",
  ];

  await Promise.all(
    routes.map((route) => access(new URL(`app/${route}/page.tsx`, projectRoot))),
  );
});

test("keeps the official brand assets", async () => {
  await Promise.all([
    "public/brand/instituto-fpcf-logo-oficial.png",
    "public/brand/instituto-fpcf-logo-oficial.webp",
    "public/brand/instituto-fpcf-emblema.webp",
  ].map((asset) => access(new URL(asset, projectRoot))));
});

test("renders the footer logo in white without a light tile", async () => {
  const [footer, styles] = await Promise.all([
    read("components/Footer.tsx"),
    read("app/globals.css"),
  ]);

  assert.match(footer, /src="\/brand\/instituto-fpcf-logo-oficial\.webp"/);
  assert.match(styles, /\.footer-brand img \{[^}]*filter: brightness\(0\) invert\(1\)/);
  assert.doesNotMatch(styles, /\.footer-brand img \{[^}]*background: var\(--paper\)/);
});

test("centers the footer signature beside the logo only on wider screens", async () => {
  const styles = await read("app/globals.css");

  assert.match(styles, /@media \(min-width: 720px\) \{[\s\S]*?\.footer-brand > div \{ align-self: center; \}/);
  assert.match(styles, /@media \(max-width: 719px\) \{\s*\.footer-brand \{ flex-direction: column; \}/);
});

test("shows the founder's original portrait instead of the monogram", async () => {
  const [institute, styles] = await Promise.all([
    read("app/instituto/page.tsx"),
    read("app/globals.css"),
  ]);

  await access(new URL("public/editorial/fundadora-maria-aparecida.png", projectRoot));
  assert.match(institute, /import Image from "next\/image"/);
  assert.match(institute, /src="\/editorial\/fundadora-maria-aparecida\.png"/);
  assert.match(institute, /alt="Maria Aparecida de Freitas da Silva, fundadora e diretora do Instituto"/);
  assert.match(institute, /Maria Aparecida de Freitas da Silva é a fundadora e diretora/);
  assert.doesNotMatch(institute, /founder-monogram|<span>MA<\/span>/);
  assert.match(styles, /\.founder-portrait-frame/);
});

test("keeps the official enrollment and WhatsApp destinations", async () => {
  const source = await read("components/site-data.ts");

  assert.match(source, /https:\/\/forms\.gle\/4vnfPgG2ZpqZZbndA/);
  assert.match(source, /5521988479250/);
});

test("does not claim regulated recognition", async () => {
  const files = [
    "app/page.tsx",
    "app/formacao-psicanalitica/page.tsx",
    "components/InternalPage.tsx",
    "components/site-data.ts",
  ];
  const source = (await Promise.all(files.map(read))).join("\n");

  assert.doesNotMatch(
    source,
    /reconhecid[oa]|credenciad[oa]|chancela|autorizad[oa] pelo MEC|emprego garantido|estágio garantido|certificação internacional|taxa de aprovação|índice de satisfação/i,
  );
  assert.match(source, /curso livre/i);
});

test("shows all four testimonials between benefits and other courses", async () => {
  const home = await read("app/page.tsx");
  const ids = ["-K5BwA9aBZE", "YHwclWFKPA0", "A-ivSppDO-c", "Gb4vxoUNvZc"];

  for (const id of ids) assert.match(home, new RegExp(id));
  assert.match(home, /testimonials\.map\(\(id, index\)/);
  assert.ok(home.indexOf("benefits-section") < home.indexOf("testimonials-section"));
  assert.ok(home.indexOf("testimonials-section") < home.indexOf("courses-section"));
});

test("loads each testimonial player only after a click and keeps a direct link", async () => {
  const video = await read("components/TestimonialVideo.tsx");

  assert.match(video, /useState\(false\)/);
  assert.match(video, /isPlaying \? \(/);
  assert.match(video, /onClick=\{\(\) => setIsPlaying\(true\)\}/);
  assert.match(video, /youtube-nocookie\.com\/embed\/\$\{id\}/);
  assert.match(video, /youtube\.com\/shorts\/\$\{id\}/);
  assert.match(video, /Ver no YouTube/);
});

test("discloses YouTube thumbnails and click-to-load video in the privacy policy", async () => {
  const privacy = await read("app/politica-de-privacidade/page.tsx");

  assert.match(privacy, /miniaturas dos depoimentos são carregadas do YouTube/);
  assert.match(privacy, /player de cada vídeo só é carregado após o visitante clicar/);
  assert.match(privacy, /link “Ver no YouTube” abre o vídeo na plataforma/);
});

test("shows confirmed short-course prices and details without inventing promotions", async () => {
  const [courses, home, enrollment] = await Promise.all([
    read("app/cursos/page.tsx"),
    read("app/page.tsx"),
    read("app/inscricao/page.tsx"),
  ]);
  const dreams = courses.split('title: "Curso de Interpretação dos Sonhos"')[1]
    .split('title: "Curso de Primeiros Socorros Psicológicos"')[0];
  const firstAid = courses.split('title: "Curso de Primeiros Socorros Psicológicos"')[1]
    .split('title: "Curso de Florais de Bach"')[0];
  const florals = courses.split('title: "Curso de Florais de Bach"')[1]
    .split("];", 1)[0];

  assert.match(dreams, /R\$ 247,90/);
  assert.match(dreams, /interpretação dos sonhos|abordagem psicanalítica dos sonhos/i);
  assert.match(dreams, /Material didático em PDF, certificado e acesso vitalício/);
  assert.match(dreams, /Psicanalistas, psicólogos e aspirantes/);
  assert.doesNotMatch(dreams, /R\$ 99,90/);

  assert.match(firstAid, /R\$ 99,90/);
  assert.match(firstAid, /escola, empresa, igreja e em casa/);
  assert.match(firstAid, /Material didático e certificado/);
  assert.doesNotMatch(firstAid, /R\$ 247,90/);

  assert.doesNotMatch(firstAid, /R\$ 199,90/);

  assert.match(florals, /R\$ 199,90/);
  assert.match(florals, /Dr\. Edward Bach/);
  assert.match(florals, /38 essências florais/);
  assert.match(florals, /Certificado incluso/);
  assert.match(florals, /Acesso imediato aos conteúdos e pagamento em valor único/);
  assert.doesNotMatch(florals, /R\$ 247,90|R\$ 99,90/);

  assert.match(home, /Curso de Florais de Bach/);
  assert.doesNotMatch(home, /R\$ 199,90/);
  assert.doesNotMatch(`${courses}\n${home}`, /Florais de Back/);
  assert.doesNotMatch(courses, /397,90|oferta exclusiva|equilíbrio emocional|saúde emocional/i);
  assert.match(enrollment, /129,90/);
});
