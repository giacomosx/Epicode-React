import HeroClaim from '../components/hero/heroclaim/HeroClaim'
import {renderWithProviders} from './test-utils'
import { screen } from '@testing-library/react'


test('check welcome rendering', () => {
    renderWithProviders(
        <HeroClaim />
    )

    const checkElement = screen.getByTestId('welcome')
    expect(checkElement).toBeInTheDocument()    
})