import * as React from 'react';
const CONTACT_FORM_EMAIL = 'ordino@caleydo.org';
export function OrdinoContactForm() {
    const handleSubmit = React.useCallback((event) => {
        event.preventDefault();
        const form = event.currentTarget;
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
        window.location.href = 'mailto:' + CONTACT_FORM_EMAIL + parameters;
    }, []);
    return (React.createElement("div", { className: "card shadow-sm p-2", "data-testid": "contactform" },
        React.createElement("div", { className: "card-body" },
            React.createElement("p", { className: "card-text" },
                'Do you have questions or found a bug, do not hesitate to contact us using the contact form below. You can also contact us by writing an email to ',
                React.createElement("a", { className: "card-link", href: "mailto:ordino@caleydo.org.", "data-testid": "ordino-email" }, "ordino@caleydo.org"),
                ". We are glad to help you."),
            React.createElement("form", { onSubmit: handleSubmit },
                React.createElement("div", { className: "row-cols-md-3 mb-3" },
                    React.createElement("label", { className: "form-label" }, "Type of contact"),
                    React.createElement("select", { name: "subject", className: "form-select", "data-testid": "type-select" },
                        React.createElement("option", { "data-testid": "feedback-option" }, "I have some general feedback"),
                        React.createElement("option", { "data-testid": "question-option" }, "I have a question"),
                        React.createElement("option", { "data-testid": "bug-option" }, "I want to report a bug"))),
                React.createElement("div", { className: "mb-3" },
                    React.createElement("label", { className: "form-label" }, "Message"),
                    React.createElement("textarea", { className: "form-control", name: "message", rows: 5, "data-testid": "message-textarea" })),
                React.createElement("div", { className: "justify-content-end row" },
                    React.createElement("div", { className: "col-md-auto" },
                        React.createElement("button", { title: "Send Message", type: "submit", className: "btn btn-secondary", "data-testid": "send-button" }, "Send Message")))))));
}
//# sourceMappingURL=OrdinoContactForm.js.map