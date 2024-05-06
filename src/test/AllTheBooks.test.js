import {renderWithProviders} from './test-utils'
import AllTheBooks from '../components/allthebooks/AllTheBooks'
import { screen } from '@testing-library/react'

test('cards count', () => {
    renderWithProviders(
        <AllTheBooks />
    )

    const numberOfCards = screen.queryAllByRole('card')
    expect(numberOfCards).toBeInTheDocument()
})