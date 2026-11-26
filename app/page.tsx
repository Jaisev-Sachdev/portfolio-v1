import Image from "next/image";
import { ALSO_BUILT, EDUCATION, ENTRIES, SITE, SKILLS, type Entry, type Link, type Mark } from "@/lib/data";

function MarkGlyph({ mark, delay }: { mark: Mark; delay: number }) {
    const style = { "--d": `${delay}s` } as React.CSSProperties;
    switch (mark.kind) {
        case "ticks":
            return (
                <div className="mark ticks draw" style={style} aria-hidden="true">
                    {Array.from({ length: 12 }, (_, i) => (
                        <i key={i} />
                    ))}
                </div>
            );
        case "dots-solid":
            return <div className="mark dots500 draw" style={style} aria-hidden="true" />;
        case "dots-one":
            return <div className="mark dots300 draw" style={style} aria-hidden="true" />;
        case "one-of-four":
            return (
                <div className="mark four" aria-hidden="true">
                    {[0, 1, 2, 3].map((i) => (
                        <i key={i} className={i === mark.index ? "on" : undefined} />
                    ))}
                </div>
            );
    }
}

function Result({ entry, index }: { entry: Entry; index: number }) {
    const r = entry.result;
    return (
        <div className="result">
            <div className="fig">
                {r.figure}
                <small>{r.unit}</small>
            </div>
            {r.mark && <MarkGlyph mark={r.mark} delay={0.2 + index * 0.15} />}
            {entry.image && (
                <a className="shot" href={entry.image.href} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={entry.image.src}
                        alt={entry.image.alt}
                        width={1230}
                        height={770}
                        sizes="(max-width: 980px) 100vw, 330px"
                    />
                </a>
            )}
            {r.caption && (
                <div className="cap">
                    {r.caption.map((line) => (
                        <div key={line}>{line}</div>
                    ))}
                </div>
            )}
        </div>
    );
}

function Links({ links }: { links?: Link[] }) {
    if (!links?.length) return null;
    return (
        <div className="more">
            {links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label} ↗
                </a>
            ))}
        </div>
    );
}

function Ref({ n, to, label }: { n: number; to: string; label: string }) {
    return (
        <a className="ref" href={`#${to}`} aria-label={`Reference ${n}: ${label}`}>
            {n}
        </a>
    );
}

export default function Home() {
    return (
        <div className="wrap">
            <header className="mast">
                <a className="name" href="/">
                    {SITE.name}
                </a>
                <span className="what">{SITE.tagline.join(" · ")}</span>
                <nav aria-label="Links">
                    <a href={SITE.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href={`mailto:${SITE.email}`}>Email</a>
                    <a className="cv" href={SITE.resume} target="_blank" rel="noopener noreferrer">
                        Résumé, PDF ↗
                    </a>
                </nav>
            </header>

            <main>
                <div className="claim">
                    <h1>
                        I build software around AI, then check whether it <em>actually</em> worked.
                    </h1>
                    <p>
                        Last summer I shipped 120+ pull requests to an internal AI platform at Venti Technologies.
                        <Ref n={1} to="r1" label="Venti" /> I run a school portal used by about 500 students and
                        staff,
                        <Ref n={2} to="r2" label="Ascot Connect" /> and my team won its track at the MIT Bitcoin Hackathon.
                        <Ref n={3} to="r3" label="MIT Bitcoin Hackathon" />
                    </p>
                    <p className="ask">{SITE.ask}</p>
                </div>

                <div className="head" aria-hidden="true">
                    <span>Ref</span>
                    <span>When</span>
                    <span>What I did</span>
                    <span>What came of it</span>
                </div>

                {ENTRIES.map((entry, i) => (
                    <article className="entry" id={entry.id} key={entry.id}>
                        <div className="no">{i + 1}</div>
                        <div className="when">
                            <div className="kind">{entry.kind}</div>
                            {entry.when && <div>{entry.when}</div>}
                        </div>
                        <div className="body">
                            <h2>{entry.title}</h2>
                            <div className="role">{entry.role}</div>
                            <p>{entry.description}</p>
                            <div className="stack">{entry.stack.join(" · ")}</div>
                            <Links links={entry.links} />
                        </div>
                        <Result entry={entry} index={i} />
                    </article>
                ))}

                <section className="also" aria-labelledby="also-h">
                    <span />
                    <h2 id="also-h">Also built</h2>
                    <ul>
                        {ALSO_BUILT.map((o) => (
                            <li key={o.title}>
                                <div>
                                    <h3>
                                        {o.title} <span>{o.note}</span>
                                    </h3>
                                    <p>{o.description}</p>
                                </div>
                                <Links links={o.links} />
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="appx" aria-labelledby="edu-h">
                    <span />
                    <h2 id="edu-h">Education &amp; skills</h2>
                    <dl className="edu">
                        {EDUCATION.map((e) => (
                            <div key={e.school}>
                                <dt>{e.school}</dt>
                                <dd>{e.detail}</dd>
                                {e.coursework && (
                                    <dd className="cw">
                                        <span>Coursework</span>
                                        {e.coursework.join(" · ")}
                                    </dd>
                                )}
                            </div>
                        ))}
                    </dl>
                    <dl className="kv">
                        {SKILLS.map(([k, v]) => (
                            <div key={k}>
                                <dt>{k}</dt>
                                <dd>{v}</dd>
                            </div>
                        ))}
                    </dl>
                </section>
            </main>

            <footer>
                <a className="mail" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                </a>
                <span className="colophon">
                    {SITE.location} · last updated {SITE.updated}
                </span>
            </footer>
        </div>
    );
}
