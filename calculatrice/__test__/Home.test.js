import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../app/page';

describe('tester la calculatrice' , () => {
    
    test('Vérifiez si le clic sur mes boutons fonctionne correctement au niveau de l"affichage', () =>{
        const { getByText, getByDisplayValue } = render(<Home />);

        fireEvent.click(getByText('1'));
        expect(getByDisplayValue('1')).toBeTruthy();
        
        fireEvent.click(getByText('+'));
        expect(getByDisplayValue('1+')).toBeTruthy();
        
        fireEvent.click(getByText('4'));
        expect(getByDisplayValue('1+4')).toBeTruthy();
    })
    
    test('Vérifie si l"affichage est correctement positionné comme demandé', () =>{
        
        render(<Home />)
        fireEvent.click(screen.getByTestId('btn-5'));
        fireEvent.click(screen.getByTestId('btn-+'));
        fireEvent.click(screen.getByTestId('btn-4'));
        const expression = screen.getByTestId('expression')
        expect(expression.value).toBe('5+4');
    })
    
    test('Effectuer une opération d"addition', () =>{
        
        render(<Home />)
        fireEvent.click(screen.getByTestId('btn-2'));
        fireEvent.click(screen.getByTestId('btn-+'));
        fireEvent.click(screen.getByTestId('btn-3'));
        fireEvent.click(screen.getByTestId('btn-='));
        
        const result = screen.getByTestId('result')
        expect(result.value).toBe('5');
    })
    test('Effectuer une opération de soustraction', () =>{
        
        render(<Home />)
        fireEvent.click(screen.getByTestId('btn-7'));
        fireEvent.click(screen.getByTestId('btn--'));
        fireEvent.click(screen.getByTestId('btn-3'));
        fireEvent.click(screen.getByTestId('btn-='));
        
        const result = screen.getByTestId('result')
        expect(result.value).toBe('4');
    })
    test('Effectuer une opération de multiplication', () =>{
        
        render(<Home />)
        fireEvent.click(screen.getByTestId('btn-2'));
        fireEvent.click(screen.getByTestId('btn-*'));
        fireEvent.click(screen.getByTestId('btn-3'));
        fireEvent.click(screen.getByTestId('btn-='));
        
        const result = screen.getByTestId('result')
        expect(result.value).toBe('6');
    })
    test('Effectuer une opération de division', () =>{
        
        render(<Home />)
        fireEvent.click(screen.getByTestId('btn-8'));
        fireEvent.click(screen.getByTestId('btn-/'));
        fireEvent.click(screen.getByTestId('btn-2'));
        fireEvent.click(screen.getByTestId('btn-='));
        
        const result = screen.getByTestId('result')
        expect(result.value).toBe('4');
    })
    
    test('Teste une expression invalide', ()=>{

        render(<Home />)
        fireEvent.click(screen.getByTestId('btn-8'));
        fireEvent.click(screen.getByTestId('btn--'));
        fireEvent.click(screen.getByTestId('btn-*'));
        fireEvent.click(screen.getByTestId('btn-6'));
        fireEvent.click(screen.getByTestId('btn-='));
        
        const result = screen.getByTestId('result')
        expect(result.value).toBe('Expression invalide');
    })    

    
})