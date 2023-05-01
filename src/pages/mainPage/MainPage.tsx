import "./mainPage.scss"

export const MainPage = () => {
  return (
    <main className="main-page">
      <div className="main-page__promotion">
        <div className="main-page__promotion__text">
          <p className="main-page__promotion__text__h6">Festival favorites.</p>
          <p className="main-page__promotion__text__h3">30% off frames</p>
          <p className="main-page__promotion__text__h3">+ free shipping.</p>
          <p className="main-page__promotion__text__h6">Code: SAVE30</p>
        </div>
      </div>
      <p className="main-page__some-txt">We’re all about finding you that perfect pair.</p>
      <p className="main-page__some-txt__subtitle">As glasses wearers, we know how incredible the right pair can make you feel. Let’s find yours together.</p>
    </main>
  )
}