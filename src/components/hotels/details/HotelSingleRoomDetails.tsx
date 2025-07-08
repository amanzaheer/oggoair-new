import { icons } from "@/utils/data";
import Image from "next/image";
import TableRow from "./TableRow";
import { getFormattedTimeWithAmPm, ShortDate } from "@/utils/dateFormate";

export default function HotelSingleRoomDetails({
  room,
  hotelDetailsData,
  selectedBeds,
  selectedMeals,
  showFreeCancellation,
  showPaymentOnSite,
}: any) {
  // console.log(room);

  const filteredRates = room.rates.filter((rate: any) => {
    // Filter by Selected Meals
    if (selectedMeals !== "all") {
      const matchesMeal = rate.board_type === selectedMeals;
      if (!matchesMeal) return false;
    }

    // Filter by Free Cancellation
    if (showFreeCancellation) {
      const hasRefundPolicy = rate.conditions.some(
        (condition: any) =>
          condition.title === "Refund Policy" &&
          !condition.description.includes("Non-Refundable")
      );
      if (!hasRefundPolicy) return false;
    }

    // Filter by Payment on Site
    if (showPaymentOnSite) {
      const allowsPaymentOnSite = rate.payment_type === "pay_now";
      if (!allowsPaymentOnSite) return false;
    }

    // // Filter by Selected Beds
    if (selectedBeds === "All") {
      return true;
    } else if (selectedBeds === "Single") {
      const matchesBed = room.beds.length === 1;
      if (!matchesBed) return false;
    } else if (selectedBeds === "Double") {
      const matchesBed = room.beds.length === 2;
      if (!matchesBed) return false;
    } else if (selectedBeds === "Triple") {
      const matchesBed = room.beds.length === 3;
      if (!matchesBed) return false;
    }

    return true;
  });

  return (
    <div className="mt-10 bg-[#F8F9FE] rounded-2xl p-5">
      <div className="flex gap-5">
        <div className="w-[270px] h-[160px] rounded-xl overflow-hidden">
          {room?.photos[0]?.url && (
            <Image
              src={room.photos[0].url}
              width={500}
              height={500}
              alt="Picture of the hotel"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div>
          <p className="text-xl font-semibold">{room.name}</p>
          <div className="flex items-center gap-3 mt-3">
            {hotelDetailsData.accommodation.amenities
              .slice(0, 3)
              .map((amenity: any, index: number) => (
                <div
                  className="px-3 py-1 flex items-center gap-1 rounded-3xl bg-[#7BCAFF33]"
                  key={index}
                >
                  {icons[amenity.type] && (
                    <Image
                      src={icons[amenity.type]}
                      width={300}
                      height={300}
                      alt="Picture of the hotel"
                      className="h-[28px] w-[28px] object-cover"
                    />
                  )}
                  <p>{amenity.description}</p>
                </div>
              ))}
          </div>
          <div className="flex gap-10 mt-10">
            <div>
              <p className="font-semibold">
                {ShortDate(new Date(hotelDetailsData.check_in_date))}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Check-in from{" "}
                {getFormattedTimeWithAmPm(
                  hotelDetailsData.accommodation.check_in_information
                    .check_in_after_time
                )}
              </p>
            </div>
            <div>
              <p className="font-semibold">
                {ShortDate(new Date(hotelDetailsData.check_out_date))}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Check-out by{" "}
                {getFormattedTimeWithAmPm(
                  hotelDetailsData.accommodation.check_in_information
                    .check_out_before_time
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full rounded-lg overflow-hidden border border-gray-200 mt-5">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="p-3 font-semibold text-lg text-left">Room</td>
              <td className="p-3 font-semibold text-lg text-center">Guests</td>
              <td className="p-3 font-semibold text-lg text-center w-[30%]">
                Payment
              </td>
              <td className="p-3 font-semibold text-lg text-right w-[20%]">
                Price
              </td>
            </tr>
            {filteredRates.map((rate: any, index: number) => (
              <TableRow
                key={index}
                index={index}
                room={room}
                rate={rate}
                hotelDetailsData={hotelDetailsData}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
