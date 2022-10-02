export const getDefaultValues = data => {
  const category = data?.categories[0] ? [{
    value: data.categories[0]._id,
    label: data.categories[0].name,
  }] : null;

  return {
    name: data?.name || '',
    category,
    start_date: new Date(),
    end_date: new Date().setMinutes(new Date().getMinutes() + 1),
  }
}