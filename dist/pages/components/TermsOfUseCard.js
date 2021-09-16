import React from 'react';
export function TermsOfUseCard({ testId: parentTestId }) {
    const testId = `${parentTestId}-terms-of-use`;
    return (React.createElement("div", { className: "shadow-sm card p-2" },
        React.createElement("div", { className: "card-body" },
            React.createElement("div", { className: "list-group list-group-flush" },
                React.createElement("div", { className: "list-group-item" }, "This instance of Ordino is intended for scientific research and non-commercial use only."),
                React.createElement("div", { className: "list-group-item" }, "Ordino cannot be used for the provision of medical advice."),
                React.createElement("div", { className: "list-group-item" }, "We expect attribution (e.g. in publications, services or products) for any of Ordino's online services, databases or software in accordance with good scientific practice."),
                React.createElement("div", { className: "list-group-item" }, "Ordino provides data collated from the public domain with references to their sources. We cannot guarantee the accuracy of any data or databases nor their suitability for user purposes."),
                React.createElement("div", { className: "list-group-item" }, "The original data in Ordino may be subject to rights claimed by third parties, including but not limited to, patent, copyright, other intellectual property rights, biodiversity-related access and benefit-sharing rights. It is the responsibility of users of Ordino to ensure that their exploitation of the data does not infringe any of the rights of such third parties."),
                React.createElement("div", { className: "list-group-item" }, "We are not liable to you or third parties claiming through you, for any loss or damage."),
                React.createElement("div", { className: "list-group-item" }, "We do not accept responsibility for the consequences of any breach of the confidentiality of the Ordino Site by third parties."),
                React.createElement("div", { className: "list-group-item" }, "We accept no responsibility for the consequences of any temporary or permanent discontinuity in service of this Site."),
                React.createElement("div", { className: "list-group-item" }, "Users of Ordino agree not to attempt to use any Ordino computers, files or networks apart from through the service interfaces provided."),
                React.createElement("div", { className: "list-group-item" }, "Any attempt to use Ordino to a level that prevents, or looks likely to prevent, Ordino providing services to others, will result in the use being blocked."),
                React.createElement("div", { className: "list-group-item" }, "Any feedback on Ordino will be treated as non-confidential unless the individual or organization providing the feedback states otherwise.")))));
}
//# sourceMappingURL=TermsOfUseCard.js.map