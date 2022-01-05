import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import Logo from '.';

describe('<Logo />', () => {
	it('should render the heading', () => {
		const { container } = render(<Logo />);

		const heading = screen.getByRole('heading', { name: /Logo/i });

		expect(heading).toBeInTheDocument();
	});
});
