import './PersonalInfo.css'

function PersonalInfo({ name, profession, description, photoUrl }) {
  return (
    <section className="personal-info brutal-box">
      {photoUrl && (
        <img src={photoUrl} alt={name} className="personal-info__photo" />
      )}
      <div className="personal-info__content">
        <h1 className="personal-info__name">{name}</h1>
        <h2 className="personal-info__profession">{profession}</h2>
        <p className="personal-info__desc">{description}</p>
      </div>
    </section>
  )
}

export default PersonalInfo
