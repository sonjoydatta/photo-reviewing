import { Heading, Layout } from '@/components';
import { config } from '@/config';
import { localStorageService } from '@/service';
import { Fragment, useCallback, useEffect, useReducer, useState } from 'react';
import { createApi } from 'unsplash-js';
import { AddButton } from './AddButton';
import { ButtonsMemo } from './Buttons';
import { ImageSliderMemo } from './ImageSlider';
import { PreviewerMemo } from './Previewer';
import { initialState, reducer } from './store';

const unsplashAPI = createApi({
  accessKey: config.unsplashAccessKey,
});

const Approval = () => {
  const [isLoading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState, (initialState) => {
    const cachedStore = localStorageService.get('persist:store');
    if (cachedStore) {
      return cachedStore;
    }
    return initialState;
  });

  const { approved, current } = state;

  useEffect(() => {
    localStorageService.set('persist:store', state);
  }, [state]);

  const handleAdd = useCallback(async () => {
    setLoading(true);

    try {
      const { type, response } = await unsplashAPI.photos.getRandom();
      if (type === 'success') {
        const { id, description, urls } = response;
        const payload = {
          id,
          description,
          urls,
        };
        dispatch({ type: 'SET_CURRENT_IMAGE', payload });
      }
      // eslint-disable-next-line no-empty
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  const handleReject = useCallback(() => {
    if (current) {
      dispatch({ type: 'ADD_REJECTED_IMAGE', payload: current });
      handleAdd();
    }
  }, [current, handleAdd]);

  const handleApprove = useCallback(() => {
    if (current) {
      dispatch({ type: 'ADD_APPROVED_IMAGE', payload: current });
      handleAdd();
    }
  }, [current, handleAdd]);

  return (
    <Layout>
      <Layout.Header>
        <Heading>Image approval application</Heading>
      </Layout.Header>
      <Layout.Body>
        <Heading style={{ marginBottom: '1rem' }}>Approved images ({approved.length})</Heading>
        {approved.length > 0 ? <ImageSliderMemo images={approved} /> : <AddButton onAdd={handleAdd} />}
        <Layout.Divider />
        {current && (
          <Fragment>
            <PreviewerMemo src={current.urls.small} isLoading={isLoading} />
            <Layout.Divider />
            <ButtonsMemo onReject={handleReject} onApprove={handleApprove} />
          </Fragment>
        )}
      </Layout.Body>
    </Layout>
  );
};

export default Approval;
