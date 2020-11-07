import Subscriber from "../models/subscriber.js"
// export const getAllSubscribers = (req, res) => {
//     Subscriber.find({})
//       .exec()
//       .then(subscribers => {
//         res.render("subscribers", {
//           subscribers: subscribers
//         });
//       })
//       .catch(error => {
//         console.log(error.message);
//         return [];
//       })
//       .then(() => {
//         console.log("promise complete");
//       });
// };


export const getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find({});
    if (!subscribers) throw Error('No users exist');
    res.render("subscribers", {
        subscribers: subscribers
      });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};
git add-commit -m ' promise vs async await subscriber_controller '