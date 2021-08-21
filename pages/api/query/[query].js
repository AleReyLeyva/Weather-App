/* eslint-disable import/no-anonymous-default-export */
import API from '../../../API';

export default async (req, res) => {
  const { query } = req.query;
  const { data } = await API.get(`/search/?query=${query}`);
  const results = data.splice(0, 6);
  res
    .status(200)
    .json(results.map(({ title, woeid }) => ({ city: title, id: woeid })));
};
