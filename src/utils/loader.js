const loader = setLoading =>
  new Promise(resolve => setTimeout(() => resolve(), 5000)).then(() =>
    setLoading(false)
  );

export default loader;
