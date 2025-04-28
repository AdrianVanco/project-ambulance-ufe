import { newSpecPage } from '@stencil/core/testing';
import { Cv1xvancoaAmbulanceWlList } from '../cv1xvancoa-ambulance-wl-list';

describe('cv1xvancoa-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv1xvancoaAmbulanceWlList],
      html: `<cv1xvancoa-ambulance-wl-list></cv1xvancoa-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <cv1xvancoa-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cv1xvancoa-ambulance-wl-list>
    `);
  });
});
