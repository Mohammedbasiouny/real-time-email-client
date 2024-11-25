const Email = require('../models/Email');

exports.sendEmail = async (req, res) => {
  const { subject, body, recipientId } = req.body;
  try {
    const email = await Email.create({
      subject,
      body,
      senderId: req.user.id,
      recipientId,
    });
    res.status(201).json({ message: 'Email sent', email });
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' });
  }
};

exports.getInbox = async (req, res) => {
  try {
    const emails = await Email.findAll({ where: { recipientId: req.user.id } });
    res.status(200).json(emails);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching inbox' });
  }
};
