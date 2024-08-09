import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Page from '../app/(main-flow)/payment-information/page';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
      prefetch: () => null,
    };
  },
}));

const formMethods = {
  handleSubmit: jest.fn(),
  formState: {
    errors: [],
    dirtyFields: [],
  },
  register: jest.fn(),
};

jest.mock('react-hook-form', () => ({
  useForm() {
    return formMethods;
  },
  useFormContext() {
    return formMethods;
  },
}));

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />);

    const heading = screen.getByText('Payment information');

    expect(heading).toBeInTheDocument();
  });
  it('shows error when not', () => {
    render(<Page />);

    fireEvent(screen.getByText('Continue'), new MouseEvent('click'));

    const error = screen.getByText('This field is required');
    expect(error).toBeInTheDocument();
  });
});
