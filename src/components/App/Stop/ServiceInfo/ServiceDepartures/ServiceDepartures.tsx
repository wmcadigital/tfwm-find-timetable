import { useStopContext } from 'globalState';
import Button from 'components/shared/Button/Button';

const ServiceDepartures = ({ departures }: { departures: any[] }) => {
  const [{ selectedLine, stopDepartures, stopLines }] = useStopContext();
  const route = stopLines?.services.find((line: any) => line.id === selectedLine.id);
  return (
    <div className="wmnds-m-b-lg">
      <div className="wmnds-live-departures wmnds-live-departures--service">
        <div className="wmnds-live-departures__service-details wmnds-m-b-md">
          <div className="wmnds-live-departures__service-name">{selectedLine.name}</div>
          <div className="wmnds-live-departures__service-description">
            <div className="wmnds-h3 wmnds-m-none">{route.routes[0].routeName}</div>
          </div>
        </div>
        <p>
          <strong>{selectedLine.operator}</strong> runs this service
        </p>
        <Button
          iconLeft="general-star-empty"
          text="Add to homepage"
          btnClass="wmnds-btn--favourite"
        />
        <hr />
        <div className="wmnds-grid wmnds-grid--justify-between wmnds-grid--spacing-md-2-md">
          <div className="wmnds-col-1 wmnds-col-md-auto">
            <div className="wmnds-h3 wmnds-m-t-none wmnds-m-b-md">Real time departures</div>
            <p className="wmnds-m-b-md">
              See when the next {selectedLine.name} bus leaves this stop
            </p>
          </div>
          <div className="wmnds-col-1 wmnds-col-md-auto">
            <p className="wmnds-live-departures__last-updated">
              Last updated {stopDepartures.updatedAt}
            </p>
          </div>
        </div>
        <div className="wmnds-live-departures__times">
          {departures.length
            ? departures.map((departure: any) => (
                <div key={departure.timeToArrival} className="wmnds-live-departures__time">
                  {Math.ceil(departure.timeToArrival / 60)} mins
                </div>
              ))
            : 'Currently there are no services'}
        </div>
      </div>
    </div>
  );
};

export default ServiceDepartures;
