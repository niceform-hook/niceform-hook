import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
    theme: create({
        base: 'light',
        brandTitle: 'Niceform-hook-logo',
        brandUrl: 'https://example.com',
        brandImage: 'https://i.ibb.co/tB3pF8p/niceform-hook-logo-removebg-preview.png',
        brandTarget: '_blank'
    }),
    sidebar: {
        filters: {
            patterns: (item) => {
                // if(item.title === 'API/Hooks') console.log(item)
                return !item.tags?.includes('hidden');
            }
        }
    }
});