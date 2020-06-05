export const allScans = [
  {
    scanID: 'Y1OhgwyRmW',
    date: '01-23-2019',
    flairVolume: 192,
    t1ceVolume: 160,
    location: 'Inspira - Mullica Hill, NJ',
  },
  {
    scanID: 'A16IRDTGm0',
    date: '02-08-2019',
    flairVolume: 285,
    t1ceVolume: 249,
    location: 'Inspira - Mullica Hill, NJ',
  },
  {
    scanID: 'U99INMxb7n',
    date: '04-16-2019',
    flairVolume: 302,
    t1ceVolume: 278,
    location: 'Inspira - Mullica Hill, NJ',
  },
  {
    scanID: 'PdfknFI0Im',
    date: '06-06-2019',
    flairVolume: 290,
    t1ceVolume: 259,
    location: 'Inspira - Mullica Hill, NJ',
  },
  {
    scanID: 'kre3gHFAiX',
    date: '09-16-2019',
    flairVolume: 275,
    t1ceVolume: 249,
    location: 'Inspira - Mullica Hill, NJ',
  },
  {
    scanID: '35sDhujrzp',
    date: '01-13-2020',
    flairVolume: 250,
    t1ceVolume: 218,
    location: 'Inspira - Mullica Hill, NJ',
  },
  {
    scanID: 'H1O2gw2RmW',
    date: '02-23-2020',
    flairVolume: 242,
    t1ceVolume: 210,
    location: 'Inspira - Mullica Hill, NJ',
  },
  {
    scanID: 'F5OGgd2RmW',
    date: '03-14-2020',
    flairVolume: 152,
    t1ceVolume: 117,
    location: 'Inspira - Mullica Hill, NJ',
  },
  {
    scanID: 'Qg3ddd2RmW',
    date: '04-02-2020',
    flairVolume: 192,
    t1ceVolume: 167,
    location: 'Inspira - Mullica Hill, NJ',
  },
  {
    scanID: 'T2xGgd2RmW',
    date: '05-15-2020',
    flairVolume: 252,
    t1ceVolume: 217,
    location: 'Inspira - Mullica Hill, NJ',
  },
];

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(allScans);
}
