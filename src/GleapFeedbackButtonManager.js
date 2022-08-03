import { GleapFrameManager, GleapConfigManager, GleapTranslationManager, GleapNotificationManager } from "./Gleap";
import { loadIcon } from "./UI";

export default class GleapFeedbackButtonManager {
    feedbackButton = null;
    injectedFeedbackButton = false;

    // Feedback button types
    static FEEDBACK_BUTTON_BOTTOM_RIGHT = "BOTTOM_RIGHT";
    static FEEDBACK_BUTTON_BOTTOM_LEFT = "BOTTOM_LEFT";
    static FEEDBACK_BUTTON_CLASSIC = "BUTTON_CLASSIC";
    static FEEDBACK_BUTTON_CLASSIC_LEFT = "BUTTON_CLASSIC_LEFT";
    static FEEDBACK_BUTTON_CLASSIC_BOTTOM = "BUTTON_CLASSIC_BOTTOM";
    static FEEDBACK_BUTTON_NONE = "BUTTON_NONE";

    // GleapFeedbackButtonManager singleton
    static instance;
    static getInstance() {
        if (!this.instance) {
            this.instance = new GleapFeedbackButtonManager();
        }
        return this.instance;
    }

    /**
     * Toggles the feedback button visibility.
     * @param {*} show 
     * @returns 
     */
    toggleFeedbackButton(show) {
        if (!this.feedbackButton) {
            return;
        }

        this.feedbackButton.style.display = show ? "flex" : "none";
    }

    feedbackButtonPressed() {
        var frameManager = GleapFrameManager.getInstance();
        if (frameManager.isOpened()) {
            frameManager.hideWidget();
        } else {
            frameManager.showWidget();
        }
    }

    /**
     * Injects the feedback button into the current DOM.
     */
    injectFeedbackButton() {
        if (this.injectedFeedbackButton) {
            return;
        }
        this.injectedFeedbackButton = true;

        var elem = document.createElement("div");
        elem.onclick = () => {
            this.feedbackButtonPressed();
        };
        document.body.appendChild(elem);
        this.feedbackButton = elem;

        this.updateFeedbackButtonState();
    }

    updateNotificationBadge(count) {
        const notificationBadge = document.querySelector(".bb-notification-bubble");
        if (!notificationBadge) {
            return;
        }

        const notificationHiddenClass = "bb-notification-bubble--hidden";
        if (count > 0) {
            notificationBadge.classList.remove(notificationHiddenClass);
            notificationBadge.innerText = count;
        } else {
            notificationBadge.classList.add(notificationHiddenClass);
        }
    }

    /**
     * Updates the feedback button state
     * @returns 
     */
    updateFeedbackButtonState() {
        if (this.feedbackButton === null) {
            return;
        }

        const flowConfig = GleapConfigManager.getInstance().getFlowConfig();

        var buttonIcon = "";
        if (flowConfig.buttonLogo) {
            buttonIcon = `<img class="bb-logo-logo" src="${flowConfig.buttonLogo}" alt="Feedback Button" />`;
        } else {
            buttonIcon = loadIcon("button", "#fff");
        }

        const notificationBubble = `<div class="bb-notification-bubble bb-notification-bubble--hidden"></div>`;
        this.feedbackButton.className = "bb-feedback-button gleap-hidden";
        this.feedbackButton.setAttribute("dir", GleapTranslationManager.getInstance().isRTLLayout ? "rtl" : "ltr");
        if (
            flowConfig.feedbackButtonPosition === GleapFeedbackButtonManager.FEEDBACK_BUTTON_CLASSIC ||
            flowConfig.feedbackButtonPosition === GleapFeedbackButtonManager.FEEDBACK_BUTTON_CLASSIC_BOTTOM ||
            flowConfig.feedbackButtonPosition === GleapFeedbackButtonManager.FEEDBACK_BUTTON_CLASSIC_LEFT
        ) {
            this.feedbackButton.innerHTML = `<div class="bb-feedback-button-classic ${flowConfig.feedbackButtonPosition === GleapFeedbackButtonManager.FEEDBACK_BUTTON_CLASSIC_LEFT
                ? "bb-feedback-button-classic--left"
                : ""
                }${flowConfig.feedbackButtonPosition === GleapFeedbackButtonManager.FEEDBACK_BUTTON_CLASSIC_BOTTOM
                    ? "bb-feedback-button-classic--bottom"
                    : ""
                }">${GleapTranslationManager.translateText(
                    flowConfig.widgetButtonText
                )}</div>${notificationBubble}`;
        } else {
            this.feedbackButton.innerHTML = `<div class="bb-feedback-button-icon">${buttonIcon}${loadIcon(
                "arrowdown",
                "#fff"
            )}</div>${notificationBubble}`;
        }

        if (flowConfig.feedbackButtonPosition === GleapFeedbackButtonManager.FEEDBACK_BUTTON_NONE) {
            this.feedbackButton.classList.add("bb-feedback-button--disabled");
        }

        if (flowConfig.feedbackButtonPosition === GleapFeedbackButtonManager.FEEDBACK_BUTTON_BOTTOM_LEFT) {
            this.feedbackButton.classList.add("bb-feedback-button--bottomleft");
        }

        if (GleapFrameManager.getInstance().isOpened()) {
            this.feedbackButton.classList.add("bb-feedback-button--open");
        }
    }
}
