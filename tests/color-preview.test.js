import { render, fireEvent } from '@testing-library/svelte';
import Component from '../src/lib/components/color-preview.svelte';

describe('[slug].svelte', () => {
  it('should display the correct color values', async () => {
    const { getByText } = render(Component, { props: { h: 0, s: 0, l: 0 } });

    // Assuming that the color values are displayed in the component
    expect(getByText('#000000')).toBeInTheDocument();

    // You can also simulate user interactions and check if the color values update correctly
    // For example, if there's a button that calls generateColors when clicked:
    const button = getByText('Generate colors');
    await fireEvent.click(button);

    // Check if the color values have updated
    // This will depend on the initial state of the harmony store and the other stores
    // For example, if the initial harmony is 'mono':
    expect(getByText('#000000')).toBeInTheDocument();
  });
});