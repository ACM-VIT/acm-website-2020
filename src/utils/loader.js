const loader = setLoading =>
  new Promise(resolve => setTimeout(() => resolve(), 3000)).then(() =>
    setLoading(false)
  );

export default loader;
