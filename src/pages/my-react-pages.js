import React from 'react';
import Layout from '@theme/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MyReactPage() {
  const notify = () => toast("Wow so easy!");

  
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
      <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
    </Layout>
  );
}
