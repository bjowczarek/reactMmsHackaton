import jest from 'jest';

jest.dontMock('../components/DistrictOfficeContact.jsx');

import React from 'react';
import DistrictOfficeContact from '../components/DistrictOfficeContact.jsx';
import { shallow } from 'enzyme';

describe('DistrictOfficeContact', () => {
  describe('The DistrictOfficeContact Display', () => {
    const contact = shallow(<DistrictOfficeContact districtName="Wola"/>);
    it('should be a div', () => {
      expect(contact.type()).toBe('div');
    });

    it('should display suitable text', () => {
      expect(contact.find('div').text()).toEqual('Dane kontaktowe dla: Wola');
    });
  });
});
