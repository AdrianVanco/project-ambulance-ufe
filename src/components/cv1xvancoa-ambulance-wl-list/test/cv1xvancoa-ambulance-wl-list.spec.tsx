import { newSpecPage } from '@stencil/core/testing';
import { Cv1xvancoaAmbulanceWlList } from '../cv1xvancoa-ambulance-wl-list';

describe('cv1xvancoa-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv1xvancoaAmbulanceWlList],
      html: `<cv1xvancoa-ambulance-wl-list></cv1xvancoa-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as Cv1xvancoaAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
