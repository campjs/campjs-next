export const FRIDAY = 'Friday'
export const SATURDAY = 'Saturday'
export const SUNDAY = 'Sunday'

export const MAIN = 'Main Hall'
export const AMPHITHEATRE = 'Outdoor Amphitheatre'
export const TOWER = 'Tower Block Common Room'
export const LAWN = 'Centre Lawn'
export const COLTMAN = 'Coltman Hut'

import talks from './talks';

export const SCHEDULE = {
  [FRIDAY]: [
    {
      time: '3:00pm',
      venue: LAWN,
      title: 'First Bus Arrives'
    },
    {
      time: '4:00pm',
      venue: LAWN,
      title: 'Second Bus Arrives',
    },
    {
      time: '5:00pm',
      venue: LAWN,
      title: 'Ice Breaker Session',
      speaker: 'Tim Oxley',
      note: 'If weather permits else in Tower Block Common Room',
    },
    {
      time: '6:00pm',
      venue: MAIN,
      title: 'Dinner',
    },
    {
      time: '7:00pm',
      venue: LAWN,
      title: 'Third Bus Arrives',
    },
    {
      time: '7:15pm',
      venue: MAIN,
      title: 'Welcome and Announcements',
      speaker: 'Glen Arrowsmith',
    },
    {
      time: 'Late',
      venue: AMPHITHEATRE,
      note: 'Evening program (Music etc.)',
    },
    {
      time: 'Late',
      venue: TOWER,
      note: 'Games etc.',
    },
  ],
  [SATURDAY]: [
    {
      time: '9:00am',
      venue: MAIN,
      title: 'Breakfast',
    },
    {
      time: '10:00am - 10:30am',
      venue: TOWER,
      talk: 'iot',
      title: talks.iot.title,
      start: new Date(2017, 7, 5, 10, 0, 0),
      end: new Date(2017, 7, 5, 10, 30, 0),
      speaker: talks.iot.speaker,
    },
    {
      time: '10:00am - 12:00pm',
      venue: COLTMAN,
      talk: 'magikcraft',
      title: talks.magikcraft.title,
      start: new Date(2017, 7, 5, 10, 0, 0),
      end: new Date(2017, 7, 5, 12, 0, 0),
      speaker: talks.magikcraft.speaker,
    },
    {
      time: '10:30am - 11:00am',
      venue: AMPHITHEATRE,
      talk: 'functional',
      title: talks.functional.title,
      start: new Date(2017, 7, 5, 10, 30, 0),
      end: new Date(2017, 7, 5, 11, 0, 0),
      speaker: talks.functional.speaker,
    },
    {
      time: '10:30am - 11:00am',
      venue: TOWER,
      talk: 'robot',
      title: talks.robot.title,
      start: new Date(2017, 7, 5, 10, 30, 0),
      end: new Date(2017, 7, 5, 11, 0, 0),
      speaker: talks.robot.speaker,
    },
    {
      time: '11:00am',
      venue: MAIN,
      title: 'Morning Break',
    },
    {
      time: '11:15am - 11:45am',
      venue: AMPHITHEATRE,
      talk: 'sensor',
      title: talks.sensor.title,
      start: new Date(2017, 7, 5, 11, 15, 0),
      end: new Date(2017, 7, 5, 11, 45, 0),
      speaker: talks.sensor.speaker,
    },
    {
      time: '11:15am - 11:45am',
      venue: TOWER,
      talk: 'best',
      title: talks.best.title,
      start: new Date(2017, 7, 5, 11, 15, 0),
      end: new Date(2017, 7, 5, 11, 45, 0),
      speaker: talks.best.speaker,
    },
    {
      time: '12:00pm',
      venue: MAIN,
      title: 'Lunch',
    },
    {
      time: '1:15pm',
      venue: LAWN,
      title: 'Group Photo',
    },
    {
      time: '1:30pm - 3:00pm',
      venue: TOWER,
      title: 'Informal Lightning Talks / Demos',
      start: new Date(2017, 7, 5, 13, 30, 0),
      end: new Date(2017, 7, 5, 15, 0, 0),
    },
    {
      time: '1:30pm - 3:30pm',
      venue: COLTMAN,
      talk: 'threejs',
      title: talks.threejs.title,
      start: new Date(2017, 7, 5, 13, 30, 0),
      end: new Date(2017, 7, 5, 15, 30, 0),
      speaker: talks.threejs.speaker,
    },
    {
      time: '1:30pm - 2:00pm',
      venue: AMPHITHEATRE,
      talk: 'events',
      title: talks.events.title,
      start: new Date(2017, 7, 5, 13, 30, 0),
      end: new Date(2017, 7, 5, 14, 0, 0),
      speaker: talks.events.speaker,
    },
    {
      time: '2:00pm - 2:30pm',
      venue: AMPHITHEATRE,
      talk: 'codeScale',
      title: talks.codeScale.title,
      start: new Date(2017, 7, 5, 14, 0, 0),
      end: new Date(2017, 7, 5, 14, 30, 0),
      speaker: talks.codeScale.speaker,
    },
    {
      time: '2:30pm - 3:00pm',
      venue: AMPHITHEATRE,
      talk: 'scale',
      title: talks.scale.title,
      start: new Date(2017, 7, 5, 14, 30, 0),
      end: new Date(2017, 7, 5, 15, 0, 0),
      speaker: talks.scale.speaker,
    },
    {
      time: '3:00pm',
      venue: MAIN,
      title: 'Afternoon Break',
    },
    {
      time: '3:30pm - 4:00pm',
      venue: AMPHITHEATRE,
      talk: 'inclusive',
      title: talks.inclusive.title,
      speaker: talks.inclusive.speaker,
    },
    {
      time: '3:30pm - 4:00pm',
      venue: TOWER,
      talk: 'failures',
      title: talks.failures.title,
      start: new Date(2017, 7, 5, 15, 30, 0),
      end: new Date(2017, 7, 5, 16, 0, 0),
      speaker: talks.failures.speaker,
    },
    {
      time: '3:30pm - 4:30pm',
      venue: COLTMAN,
      talk: 'async',
      title: talks.async.title,
      start: new Date(2017, 7, 5, 15, 30, 0),
      end: new Date(2017, 7, 5, 16, 30, 0),
      speaker: talks.async.speaker,
    },
    {
      time: '6:00pm',
      venue: MAIN,
      title: 'Dinner',
    },
    {
      time: '7:00 pm',
      venue: MAIN,
      title: 'Announcements',
    },
    {
      time: 'Late',
      venue: AMPHITHEATRE,
      title: 'Evening Program',
      note: 'Karaoke, Live Coding etc',
    },
    {
      time: 'Late',
      venue: TOWER,
      title: 'Games etc',
    },
  ],
  [SUNDAY]: [
    {
      time: '9:00am',
      venue: MAIN,
      title: 'Breakfast',
    },
    {
      time: '10:00am - 10:30am',
      venue: AMPHITHEATRE,
      talk: 'unistyle',
      title: talks.unistyle.title,
      start: new Date(2017, 7, 6, 10, 0, 0),
      end: new Date(2017, 7, 6, 10, 30, 0),
      speaker: talks.unistyle.speaker,
    },
    {
      time: '10:00am - 12:00pm',
      venue: COLTMAN,
      talk: 'd3',
      title: talks.d3.title,
      start: new Date(2017, 7, 6, 10, 0, 0),
      end: new Date(2017, 7, 6, 12, 0, 0),
      speaker: talks.d3.speaker,
    },
    {
      time: '10:30am - 11:00am',
      venue: AMPHITHEATRE,
      talk: 'styled',
      title: talks.styled.title,
      start: new Date(2017, 7, 6, 10, 30, 0),
      end: new Date(2017, 7, 6, 11, 0, 0),
      speaker: talks.styled.speaker,
    },
    {
      time: '10:30am - 11:00am',
      venue: TOWER,
      talk: 'machine',
      title: talks.machine.title,
      start: new Date(2017, 7, 6, 10, 30, 0),
      end: new Date(2017, 7, 6, 11, 0, 0),
      speaker: talks.machine.speaker,
    },
    {
      time: '11:00am',
      venue: MAIN,
      title: 'Morning Break',
    },
    {
      time: '11:15am - 11:45am',
      venue: AMPHITHEATRE,
      talk: 'components',
      title: talks.components.title,
      start: new Date(2017, 7, 6, 11, 15, 0),
      end: new Date(2017, 7, 6, 11, 45, 0),
      speaker: talks.components.speaker,
    },
    {
      time: '11:15am - 11:45am',
      venue: TOWER,
      talk: 'luddite',
      title: talks.luddite.title,
      start: new Date(2017, 7, 6, 11, 15, 0),
      end: new Date(2017, 7, 6, 11, 45, 0),
      speaker: talks.luddite.speaker,
    },
    {
      time: '11:45am - 12:15pm',
      venue: AMPHITHEATRE,
      talk: 'glamorous',
      title: talks.glamorous.title,
      start: new Date(2017, 7, 6, 11, 45, 0),
      end: new Date(2017, 7, 6, 12, 15, 0),
      speaker: talks.glamorous.speaker,
    },
    {
      time: '11:45am - 12:15pm',
      venue: TOWER,
      talk: 'rule',
      title: talks.rule.title,
      start: new Date(2017, 7, 6, 11, 45, 0),
      end: new Date(2017, 7, 6, 12, 15, 0),
      speaker: talks.rule.speaker,
    },
    {
      time: '12:00pm',
      venue: MAIN,
      title: 'Lunch',
    },
    {
      time: '1:30pm - 2:30pm',
      venue: COLTMAN,
      talk: 'styledWorkshop',
      title: talks.styledWorkshop.title,
      start: new Date(2017, 7, 6, 13, 30, 0),
      end: new Date(2017, 7, 6, 14, 30, 0),
      speaker: talks.styledWorkshop.speaker,
    },
    {
      time: '1:30pm - 2:00pm',
      venue: AMPHITHEATRE,
      talk: 'payments',
      title: talks.payments.title,
      start: new Date(2017, 7, 6, 13, 30, 0),
      end: new Date(2017, 7, 6, 14, 0, 0),
      speaker: talks.payments.speaker,
    },
    {
      time: '1:30pm - 2:00pm',
      venue: TOWER,
      talk: 'diary',
      title: talks.diary.title,
      start: new Date(2017, 7, 6, 13, 30, 0),
      end: new Date(2017, 7, 6, 14, 0, 0),
      speaker: talks.diary.speaker,
    },
    {
      time: '2:00pm - 2:30pm',
      venue: AMPHITHEATRE,
      talk: 'database',
      title: talks.database.title,
      start: new Date(2017, 7, 6, 14, 0, 0),
      end: new Date(2017, 7, 6, 14, 30, 0),
      speaker: talks.database.speaker,
    },
    {
      time: '2:00pm - 2:30pm',
      venue: TOWER,
      talk: 'phonegap',
      title: talks.phonegap.title,
      start: new Date(2017, 7, 6, 14, 0, 0),
      end: new Date(2017, 7, 6, 14, 30, 0),
      speaker: talks.phonegap.speaker,
    },
    {
      time: '2:30pm - 3:00pm',
      venue: AMPHITHEATRE,
      talk: 'wasm',
      title: talks.wasm.title,
      start: new Date(2017, 7, 6, 14, 30, 0),
      end: new Date(2017, 7, 6, 15, 0, 0),
      speaker: talks.wasm.speaker,
    },
    {
      time: '2:30pm - 3:00pm',
      venue: TOWER,
      talk: 'electron',
      title: talks.electron.title,
      start: new Date(2017, 7, 6, 14, 30, 0),
      end: new Date(2017, 7, 6, 15, 0, 0),
      speaker: talks.electron.speaker,
    },
    {
      time: '2:30pm - 4:30pm',
      venue: COLTMAN,
      talk: 'elm',
      title: talks.elm.title,
      start: new Date(2017, 7, 6, 14, 30, 0),
      end: new Date(2017, 7, 6, 16, 30, 0),
      speaker: talks.elm.speaker,
    },
    {
      time: '3:00pm',
      venue: MAIN,
      title: 'Afternoon Break',
    },
    {
      time: '3:15pm - 3:45pm',
      venue: AMPHITHEATRE,
      talk: 'workers',
      title: talks.workers.title,
      start: new Date(2017, 7, 6, 15, 15, 0),
      end: new Date(2017, 7, 6, 15, 45, 0),
      speaker: talks.workers.speaker,
    },
    {
      time: '3:15pm - 4:15pm',
      venue: TOWER,
      title: 'Informal Lightning talks / demos / workshop session',
      start: new Date(2017, 7, 6, 15, 15, 0),
      end: new Date(2017, 7, 6, 16, 15, 0),
    },
    {
      time: '3:45pm - 4:15pm',
      venue: AMPHITHEATRE,
      talk: 'typechecker',
      title: talks.typechecker.title,
      start: new Date(2017, 7, 6, 15, 45, 0),
      end: new Date(2017, 7, 6, 16, 15, 0),
      speaker: talks.typechecker.speaker,
    },
    {
      time: '6:00pm',
      venue: MAIN,
      title: 'Dinner',
    },
    {
      time: '7:00 pm',
      venue: MAIN,
      title: 'Lightning Talks and Demos',
    },
    {
      time: 'Late',
      venue: MAIN,
      title: 'Closing Remarks',
    },
  ],
}
