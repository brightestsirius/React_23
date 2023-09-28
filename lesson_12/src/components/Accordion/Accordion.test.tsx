import {beforeEach, describe, expect, test} from 'vitest';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import Accordion from './Accordion';
import "@testing-library/jest-dom";
import { act } from 'react-dom/test-utils';

describe("Accordion", () => {

    beforeEach(() => {
        render(<Accordion title='Testing'><h4>Content</h4></Accordion>);
    });

    test("should show title all the time", () => {
       
        expect(screen.getByText(/Testing/i)).toBeInTheDocument();
    })

    test("should not show the content at the start", () => {

        expect(screen.queryByText(/Content/i)).not.toBeInTheDocument();
    })

    test("should show the content on accordion click",async () => {

        const title = screen.getByText(/Start/i);
        fireEvent.click(title)

        expect(await screen.findByText(/Content/i)).toBeInTheDocument();
    })
})