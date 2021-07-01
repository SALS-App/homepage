import { EventOptions, PlausibleOptions } from 'plausible-tracker';

export interface IPlausible {
    readonly trackEvent: (eventName: string, options?: EventOptions, eventData?: PlausibleOptions) => void;
    readonly trackPageview: (eventData?: PlausibleOptions, options?: EventOptions) => void;
    readonly enableAutoPageviews: () => void
    readonly enableAutoOutboundTracking: (targetNode?: Node & ParentNode, observerInit?: MutationObserverInit) => void
}