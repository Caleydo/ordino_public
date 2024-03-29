import * as React from 'react';

const CONTACT_FORM_EMAIL = 'ordino@caleydo.org';

export function OrdinoContactForm() {
  const handleSubmit = React.useCallback((event: React.SyntheticEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const subject = data.get('subject').toString();
    const message = data.get('message').toString();
    let parameters = subject || message ? '?' : '';
    if (subject) {
      parameters += `subject=${encodeURIComponent(subject)}`;
    }
    if (message) {
      parameters += `${subject ? '&' : ''}body=${encodeURIComponent(message)}`;
    }
    form.reset();
    window.location.href = `mailto:${CONTACT_FORM_EMAIL}${parameters}`;
  }, []);

  return (
    <div className="card shadow-sm p-2" data-testid="contact-form">
      <div className="card-body">
        <p className="card-text">
          {'Do you have questions or found a bug, do not hesitate to contact us using the contact form below. You can also contact us by writing an email to '}
          <a className="card-link" href="mailto:ordino@caleydo.org" data-testid="ordino-email">
            ordino@caleydo.org
          </a>
          . We are glad to help you.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="row-cols-md-3 mb-3">
            <label className="form-label">Type of contact</label>
            <select name="subject" className="form-select" data-testid="type-select">
              <option data-testid="feedback-option">I have some general feedback</option>
              <option data-testid="question-option">I have a question</option>
              <option data-testid="bug-option">I want to report a bug</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" name="message" rows={5} data-testid="message-textarea" />
          </div>

          <div className="justify-content-end row">
            <div className="col-md-auto">
              <button title="Send Message" type="submit" className="btn btn-secondary" data-testid="send-button">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
