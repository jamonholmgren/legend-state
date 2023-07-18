import { BindKeys, FCReactiveObject, configureReactive } from '@legendapp/state/react';

export function enableReactComponents() {
    const bindInfo: BindKeys = { value: { handler: 'onChange', getValue: (e) => e.target.value, defaultValue: '' } };
    const bindInfoInput: BindKeys = Object.assign(
        { checked: { handler: 'onChange', getValue: (e: { target: { checked: boolean } }) => e.target.checked } },
        bindInfo,
    );
    configureReactive({
        binders: {
            input: bindInfoInput,
            textarea: bindInfo,
            select: bindInfo,
        },
    });
}

// Types:

import type { IReactive } from '@legendapp/state/react';

declare module '@legendapp/state/react' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IReactive extends FCReactiveObject<JSX.IntrinsicElements> {}
}
