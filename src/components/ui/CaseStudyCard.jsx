export default function CaseStudyCard({
  path,
  name,
  eyebrow,
  image,
  imageAlt,
  imagePosition,
  title,
  description,
  metrics = [],
}) {
  return (
    <article className="case-study-card">
      <div className="case-study-card__media">
        <div className="case-study-card__image-wrap">
          <img
            className="case-study-card__image"
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            width="1400"
            height="808"
            style={imagePosition ? { objectPosition: imagePosition } : undefined}
          />
        </div>
      </div>

      <div className="case-study-card__content">
        <div className="case-study-card__identity">
          <p className="case-study-card__name"><a href={path}>{name}</a></p>
          {eyebrow && <p className="case-study-card__eyebrow">{eyebrow}</p>}
        </div>

        <div className="case-study-card__story">
          <h3 className="case-study-card__title">{title}</h3>
          <p className="case-study-card__description">{description}</p>
        </div>

        {path && (
          <a
            className="case-study-card__link"
            href={path}
            aria-label={`Ver detalhes do projeto ${name}`}
          >
            <span>Ver projeto</span>
            <span className="case-study-card__link-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12h13M12 6l6 6-6 6" />
              </svg>
            </span>
          </a>
        )}

        {metrics.length > 0 && (
          <dl className="case-study-card__metrics" aria-label="Destaques do projeto">
            {metrics.map((metric) => (
              <div className="case-study-card__metric" key={`${metric.value}-${metric.label}`}>
                <dt>{metric.value}</dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </article>
  );
}
