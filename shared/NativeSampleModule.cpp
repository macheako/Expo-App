#include "NativeSampleModule.h"
#include "boost/array.hpp"
#include <string>

namespace facebook::react {

LakiBeamUDP * NativeSampleModule::_scanner = nullptr;

NativeSampleModule::NativeSampleModule(std::shared_ptr<CallInvoker> jsInvoker)
    : NativeSampleModuleCxxSpec(std::move(jsInvoker)) {}

std::string NativeSampleModule::reverseString(jsi::Runtime& rt, std::string input) {
  boost::array<int,4> a = { 1, 2, 3, 4 };
  //return std::string(input.rbegin(), input.rend());
  return std::to_string(a.size());
}

bool NativeSampleModule::startScanner(
  jsi::Runtime& rt, 
  std::string device_ip, 
  int32_t device_port,
  std::string host_ip,
  int32_t host_port
) {
  if (NativeSampleModule::_scanner == nullptr)
  {
    _scanner = new LakiBeamUDP(host_ip, std::to_string(host_port), device_ip, std::to_string(device_port));
  }

  return _scanner != nullptr;
}

int32_t NativeSampleModule::scan(jsi::Runtime& rt)
{
  if (NativeSampleModule::_scanner != nullptr)
  {
      struct repark_t scan_results;
      if (_scanner->get_repackedpack(scan_results))
      {
        int32_t points = 0;
        for (int32_t i = 0; i < CONFIG_CIRCLE_DOTS; ++i)
        {
            if (scan_results.dotcloud[i].distance > 0)
              ++points;
        }
        
        return points;
      }

      return -1;
  }  

  return -2;
}

} // namespace facebook::react