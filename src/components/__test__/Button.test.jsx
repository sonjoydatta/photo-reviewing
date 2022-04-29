import renderer from 'react-test-renderer';
import Button from '../Button';

describe('Button component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button>Hello World</Button>);
    expect(tree).toMatchSnapshot();
  });

  it('render with primary variant', () => {
    const tree = renderer.create(<Button variant="primary">Hello World</Button>);
    expect(tree).toMatchSnapshot();
  });

  it('render with secondary variant', () => {
    const tree = renderer.create(<Button variant="secondary">Hello World</Button>);
    expect(tree).toMatchSnapshot();
  });

  it('render with radius variant', () => {
    const tree = renderer.create(<Button rounded>Hello World</Button>);
    expect(tree).toMatchSnapshot();
  });
});
