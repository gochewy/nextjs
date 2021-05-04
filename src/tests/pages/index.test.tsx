import renderer from 'react-test-renderer';
import React from "react";
import {cleanup} from "@testing-library/react";
import Home from "../../../pages";

describe('Landing page', () => {
    afterEach(cleanup);


    let component;
    component = renderer.create(
            <Home />
    )
    it('should match snapshot', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
});