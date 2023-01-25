import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";

describe('<Notifications /> Component Tests', () => {
    it('Renders without crashing', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications).toBeDefined();
    });

    it('renders three list items', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.find('li')).toHaveLength(3);
    });

    it('renders the correct text', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.find('p').text()).toBe(
            'Here is the list of notifications'
        );
    });

});