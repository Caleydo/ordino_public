import * as React from 'react';
import { Link } from 'react-router-dom';
import { HeaderNavigation } from 'ordino';
import ordinoHero from '../../assets/ordino-hero.svg';

const INTRO_VIDEO_MODAL_ID = 'ordino-intro-video-modal';

export function OrdinoHero() {
  const [modalIsClosed, setModalIsClosed] = React.useState(true);
  const videoRef = React.useRef(null);

  const handleCloseModal = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    // backdrop === modal node
    if (target.id === INTRO_VIDEO_MODAL_ID) {
      setModalIsClosed(true);
    }
  };

  return (
    <>
      <div className="ordino-hero">
        <HeaderNavigation bg="transparent" />
        <div className="container" data-testid="ordino-hero">
          <div className="row ordino-hero-claim my-4">
            <div className="col text-center">
              <p>
                Ordino is a browser-based visual data analysis solution to flexibly rank, filter, and explore genes, cell lines, and tissue samples based on a
                rich set of experimental and metadata.
              </p>
            </div>
          </div>
          <div className="row ordino-hero-actions my-4">
            <div className="col text-center">
              <button
                type="button"
                className="btn btn-link btn-lg"
                data-testid="play-button"
                onClick={() => setModalIsClosed(false)}
                data-bs-toggle="modal"
                data-bs-target={`#${INTRO_VIDEO_MODAL_ID}`}
              >
                <i className="fas fa-play" />
                Watch intro video
              </button>
            </div>
            <div className="col text-center">
              <Link to="/help" className="btn btn-link btn-lg" data-testid="info-link">
                <i className="fas fa-question" />
                Learn more about Ordino
              </Link>
            </div>
          </div>
          <div className="row ordino-hero-image mt-5">
            <div className="col">
              <img src={ordinoHero} alt="Screenshot of an analysis with Ordino" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal"
        id={INTRO_VIDEO_MODAL_ID}
        data-testid="ordino-intro-video-modal"
        onClick={handleCloseModal}
        aria-labelledby="ordino-intro-video-modal-title"
        aria-hidden="true"
      >
        <div className="modal-dialog ordino-intro-video-modal">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title h4">Introduction to Ordino</div>
              <button
                type="button"
                className="btn-close"
                data-testid="close-button"
                onClick={() => setModalIsClosed(true)}
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {!modalIsClosed && (
                <iframe
                  ref={videoRef}
                  width="1280"
                  height="720"
                  src="https://www.youtube-nocookie.com/embed/JZIIf-k852g?autoplay=0"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
