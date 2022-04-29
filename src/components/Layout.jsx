import styled from 'styled-components';
import { COLORS, RADIUS } from './constants';

const LayoutWrapper = styled.div`
  width: 100%;
  max-width: 24.375rem;
  margin: 1rem auto;
  border-radius: ${RADIUS.corner};
  background-color: ${COLORS.white};
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr;
`;

const LayoutDivider = styled.div`
  clear: both;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${COLORS.border};
`;

const LayoutHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${COLORS.border};
`;

const LayoutBody = styled.div`
  padding: 1rem;

  ${LayoutDivider} {
    margin-top: 1rem;
  }
`;

const Layout = (props) => <LayoutWrapper {...props} />;
Layout.Header = LayoutHeader;
Layout.Body = LayoutBody;
Layout.Divider = LayoutDivider;

export default Layout;
