import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import React from "react";
import About from "../componentes/Paginas/About";


describe("Tests in <About />", () => {

    test("should message 201800464 - Pablo Andres Argueta Hernandez  appear on the screen", () => {
        const textoEsperado = "201800464 - Pablo Andres Argueta Hernandez";
        const wrapper = shallow(<About />);
        const textoInput = wrapper.find("h2").at(0).text();
        expect(textoInput).toBe(textoEsperado);
    });
});