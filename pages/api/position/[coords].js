import API from '../../../API';
import cors from '../../../services/cors';

export default async (req, res) => {
  await cors(req, res);
  const { coords } = req.query;

  const { data } = await API.get(`/search/?lattlong=${coords}`);
  const { woeid } = data[0];

  res.json({ id: woeid });
};
