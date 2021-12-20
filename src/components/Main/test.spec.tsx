import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
	it('should render the heading', () => {
		const { container } = render(<Main />);

		const heading = screen.getByRole('heading', { name: /react avançado/i });

		expect(heading).toBeInTheDocument();
		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render the colors correctly', () => {
		const { container } = render(<Main />);

		expect(container.firstChild).toHaveStyle({ backgroundColor: '#06092b' });
	});
});
