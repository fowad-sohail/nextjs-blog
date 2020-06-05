export const allPatients = [
  {
    patientID: '266m6hNni8',
    name: 'Joe James',
    age: 32,
    gender: 'M',
    scanIDs: ['Y1OhgwyRmW'],
  },
  {
    patientID: 'lLSdGIikDV',
    name: 'John Walsh',
    age: '23',
    gender: 'M',
    scanIDs: ['Y1OhgwyRmW', 'A16IRDTGm0'],
  },
  {
    patientID: 'Hs4KMCrvjv',
    name: 'Vanessa Houston',
    age: '56',
    gender: 'F',
    scanIDs: ['Y1OhgwyRmW', 'A16IRDTGm0', 'U99INMxb7n'],
  },
  {
    patientID: 'Rbc7smgpI6',
    name: 'Jessica Herm',
    age: '76',
    gender: 'F',
    scanIDs: ['Y1OhgwyRmW', 'U99INMxb7n'],
  },
  {
    patientID: 'NCFGBbNTdZ',
    name: 'Sidrah Case',
    age: '61',
    gender: 'F',
    scanIDs: ['35sDhujrzp', 'A16IRDTGm0', 'U99INMxb7n'],
  },
  {
    patientID: 'FQj6TQeTUx',
    name: 'Hanna Firth',
    age: '42',
    gender: 'F',
    scanIDs: ['35sDhujrzp', 'A16IRDTGm0', 'U99INMxb7n', 'kre3gHFAiX'],
  },
  {
    patientID: 'At3lu2mfZM',
    name: 'Sofija Britt',
    age: '21',
    gender: 'F',
    scanIDs: [
      '35sDhujrzp',
      'A16IRDTGm0',
      'U99INMxb7n',
      'kre3gHFAiX',
      'PdfknFI0Im',
    ],
  },
  {
    patientID: 'W24p7B0ZUW',
    name: 'Simon Povey',
    age: 54,
    gender: 'M',
    scanIDs: [
      '35sDhujrzp',
      'A16IRDTGm0',
      'U99INMxb7n',
      'kre3gHFAiX',
      'PdfknFI0Im',
      'Y1OhgwyRmW',
      'T2xGgd2RmW',
      'Qg3ddd2RmW',
      'F5OGgd2RmW',
      'H1O2gw2RmW',
    ],
  },
];

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(allPatients);
}
