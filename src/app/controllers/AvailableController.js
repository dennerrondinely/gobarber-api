import { startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';

import Appointments from '../models/Appointment';

class AvailableController {
  async index(req, res) {
    const { date } = req.query;
    if (!date) {
      return res.staus(400).json({ error: 'Invalid date' });
    }

    const searchDate = Number(date);

    const appointments = await Appointments.findAll({
      where: {
        provider_id: req.params.providerId,
        canceled_at: true,
        date: { [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)] },
      },
    });

    return res.json(appointments);
  }
}

export default new AvailableController();
