// Output function

const Output = (props) => {
  return (
    <form>
      <textarea type="text" onKeyUp={translateText} />
    </form>
  );
};

// Export default Output
export default Output;
