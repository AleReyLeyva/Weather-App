import API from '../../../API';

export default async (req, res) => {
  const { coords } = req.query;

  const { data } = await API.get(`/search/?lattlong=${coords}`);
  const { woeid } = data[0];

  res.json({ id: woeid });
};
