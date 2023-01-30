import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("Testing <NotificationItem /> component", () => {
    let wrapper;

    beforeEach(()=> {
        wrapper = shallow(<NotificationItem />);
    });

    it("NotificationItem renders without crashing", () => {
        expect(wrapper).toBeDefined();
    });

    it("Renders the correct dummy type and value props", () => {
        wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.find("li").text()).toBe("test");
        expect(wrapper.find("li").prop("data-notification-type")).toBe("default");
    });

    it("Renders the correct html prop", () => {
        wrapper = shallow(<NotificationItem html="<u>test</u>" />);
        expect(wrapper.find("li").html()).toBe("<li><u>test</u></li>");
    });
});