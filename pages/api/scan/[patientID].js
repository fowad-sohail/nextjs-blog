import { allScans } from '../scans';
import { allPatients } from '../patients';

export default function userHandler(req, res) {
  const {
    query: { patientID },
    method,
  } = req;

  switch (method) {
    case 'GET':
      const getScans = getAllScans(patientID);
      res.status(200).json({
        patientScans: getScans,
      });
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

function getAllScans(patientID) {
  const thisPatientObject = allPatients.filter(
    (singlePatient) => singlePatient.patientID === patientID
  );
  const patientsScanIDs = thisPatientObject[0].scanIDs;

  const filteredScans = allScans.filter((singleScan) =>
    patientsScanIDs.includes(singleScan.scanID)
  );

  return filteredScans;
}
