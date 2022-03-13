//
//  RNVersionInfo.m
//

#import "GetAppInfo.h"

@implementation GetAppInfo

RCT_EXPORT_MODULE()

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

- (NSDictionary *)constantsToExport
{
  return @{
    @"appVersion"      : [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"] ?: [NSNull null],
  };
}

@end
