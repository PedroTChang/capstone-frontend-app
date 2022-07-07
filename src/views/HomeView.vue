<-------------------------------------
Translated Report (Full Report Below)
-------------------------------------

Process:               Logi Bolt [2619]
Path:                  /Applications/Logi Bolt.app/Contents/MacOS/Logi Bolt
Identifier:            com.logi.bolt.app
Version:               1.2 (1.2.6024)
Code Type:             X86-64 (Translated)
Parent Process:        launchd [1]
User ID:               501

Date/Time:             2022-07-07 14:06:38.4053 -0700
OS Version:            macOS 12.3.1 (21E258)
Report Version:        12
Anonymous UUID:        8C91BE94-9769-0991-42E8-E7EDF104A81A

Sleep/Wake UUID:       F5ED13EA-1A9A-4D82-99FB-AD35B159D83A

Time Awake Since Boot: 1900000 seconds
Time Since Wake:       28072 seconds

System Integrity Protection: enabled

Crashed Thread:        0  Dispatch queue: com.apple.main-thread

Exception Type:        EXC_BAD_INSTRUCTION (SIGILL)
Exception Codes:       0x0000000000000001, 0x0000000000000000
Exception Note:        EXC_CORPSE_NOTIFY

Termination Reason:    Namespace SIGNAL, Code 4 Illegal instruction: 4
Terminating Process:   exc handler [2619]

Application Specific Information:
Crashing on exception: CGSSetSurfaceColorSpace failed with 1000


Application Specific Backtrace 0:
0   CoreFoundation                      0x00007ff81e3de7fb __exceptionPreprocess + 242
1   libobjc.A.dylib                     0x00007ff81e13fe58 objc_exception_throw + 48
2   Foundation                          0x00007ff81f1f97e3 -[NSMutableDictionary(NSMutableDictionary) initWithContentsOfFile:] + 0
3   AppKit                              0x00007ff8216fd5dc set_surface_colorspace + 124
4   AppKit                              0x00007ff821334ade NSOpenGLContextUpdateOffScreenViewSurface + 566
5   AppKit                              0x00007ff821003e83 NSOpenGLContextAttachOffScreenViewSurface + 91
6   AppKit                              0x00007ff821334162 __27-[NSOpenGLContext setView:]_block_invoke + 432
7   AppKit                              0x00007ff820d0e1e7 NSPerformVisuallyAtomicChange + 132
8   AppKit                              0x00007ff821003bf2 -[NSOpenGLContext setView:] + 139
9   libqcocoa.dylib                     0x00000001184350bd _ZN15QCocoaGLContext11setDrawableEP16QPlatformSurface + 1277
10  libqcocoa.dylib                     0x0000000118434a38 _ZN15QCocoaGLContext11makeCurrentEP16QPlatformSurface + 344
11  QtGui                               0x0000000112bd48fc _ZN14QOpenGLContext11makeCurrentEP8QSurface + 172
12  QtGui                               0x0000000112e7b1bd _ZN21QPlatformBackingStore15composeAndFlushEP7QWindowRK7QRegionRK6QPointP20QPlatformTextureListb + 301
13  QtWidgets                           0x0000000113b45a74 _ZN21QWidgetRepaintManager5flushEP7QWidgetRK7QRegionP20QPlatformTextureList + 1028
14  QtWidgets                           0x0000000113b47bed _ZN21QWidgetRepaintManager5flushEv + 605
15  QtWidgets                           0x0000000113b46f98 _ZN21QWidgetRepaintManager13paintAndFlushEv + 4872
16  QtWidgets                           0x0000000113b45455 _ZN21QWidgetRepaintManager4syncEP7QWidgetRK7QRegion + 613
17  QtWidgets                           0x0000000113b94a54 _ZN13QWidgetWindow17handleExposeEventEP12QExposeEvent + 372
18  QtWidgets                           0x0000000113b91a46 _ZN13QWidgetWindow5eventEP6QEvent + 1094
19  QtWidgets                           0x0000000113b399ea _ZN19QApplicationPrivate13notify_helperEP7QObjectP6QEvent + 266
20  QtWidgets                           0x0000000113b3ae11 _ZN12QApplication6notifyEP7QObjectP6QEvent + 497
21  QtCore                              0x0000000111ffea34 _ZN16QCoreApplication15notifyInternal2EP7QObjectP6QEvent + 212
22  QtGui                               0x0000000112b8d7f2 _ZN22QGuiApplicationPrivate18processExposeEventEPN29QWindowSystemInterfacePrivate11ExposeEventE + 306
23  QtGui                               0x0000000112b698f3 _ZN29QWindowSystemInterfacePrivate23handleWindowSystemEventIN22QWindowSystemInterface19SynchronousDeliveryEEEbPNS_17WindowSystemEventE + 115
24  QtGui                               0x0000000112b70f92 _ZN22QWindowSystemInterface17handleExposeEventINS_19SynchronousDeliveryEEEvP7QWindowRK7QRegion + 178
25  libqcocoa.dylib                     0x00000001183fe20c _ZN12QCocoaWindow17handleExposeEventERK7QRegion + 460
26  libqcocoa.dylib                     0x0000000118406afb -[QNSView(Drawing) displayLayer:] + 907
27  AppKit                              0x00007ff820e1a375 -[_NSBackingLayer display] + 462
28  AppKit                              0x00007ff820d8f93d -[_NSViewBackingLayer display] + 554
29  QuartzCore                          0x00007ff82587f951 _ZN2CA5Layer17display_if_neededEPNS_11TransactionE + 873
30  QuartzCore                          0x00007ff8259d6336 _ZN2CA7Context18commit_transactionEPNS_11TransactionEdPd + 640
31  QuartzCore                          0x00007ff825861231 _ZN2CA11Transaction6commitEv + 777
32  AppKit                              0x00007ff820e2b761 __62+[CATransaction(NSCATransaction) NS_setFlushesWithDisplayLink]_block_invoke + 285
33  AppKit                              0x00007ff821572668 ___NSRunLoopObserverCreateWithHandler_block_invoke + 41
34  CoreFoundation                      0x00007ff81e362f75 __CFRUNLOOP_IS_CALLING_OUT_TO_AN_OBSERVER_CALLBACK_FUNCTION__ + 23
35  CoreFoundation                      0x00007ff81e362e0a __CFRunLoopDoObservers + 543
36  CoreFoundation                      0x00007ff81e36228c __CFRunLoopRun + 840
37  CoreFoundation                      0x00007ff81e361884 CFRunLoopRunSpecific + 562
38  HIToolbox                           0x00007ff827457ce6 RunCurrentEventLoopInMode + 292
39  HIToolbox                           0x00007ff827457913 ReceiveNextEventCommon + 283
40  HIToolbox                           0x00007ff8274577e5 _BlockUntilNextEventMatchingListInModeWithFilter + 70
41  AppKit                              0x00007ff820cbf53d _DPSNextEvent + 927
42  AppKit                              0x00007ff820cbdbfa -[NSApplication(NSEvent) _nextEventMatchingEventMask:untilDate:inMode:dequeue:] + 1394
43  AppKit                              0x00007ff820cb02a9 -[NSApplication run] + 586
44  libqcocoa.dylib                     0x000000011841562f _ZN21QCocoaEventDispatcher13processEventsE6QFlagsIN10QEventLoop17ProcessEventsFlagEE + 2495
45  QtCore                              0x0000000111ffaacf _ZN10QEventLoop4execE6QFlagsINS_17ProcessEventsFlagEE + 431
46  QtCore                              0x0000000111fff042 _ZN16QCoreApplication4execEv + 130
47  Logi Bolt                           0x00000001048c7a33 main + 2787
48  dyld                                0x0000000206f2151e start + 462
49  dyld                                0x0000000206f1c000 dyld + 0


Kernel Triage:
VM - pmap_enter failed with resource shortage
VM - pmap_enter failed with resource shortage
VM - pmap_enter failed with resource shortage
VM - pmap_enter failed with resource shortage
VM - pmap_enter failed with resource shortage


Thread 0 Crashed::  Dispatch queue: com.apple.main-thread
0   AppKit                        	    0x7ff82103c5fa -[NSApplication _crashOnException:] + 313
1   AppKit                        	    0x7ff820e2b99d __62+[CATransaction(NSCATransaction) NS_setFlushesWithDisplayLink]_block_invoke + 857
2   AppKit                        	    0x7ff821572668 ___NSRunLoopObserverCreateWithHandler_block_invoke + 41
3   CoreFoundation                	    0x7ff81e362f75 __CFRUNLOOP_IS_CALLING_OUT_TO_AN_OBSERVER_CALLBACK_FUNCTION__ + 23
4   CoreFoundation                	    0x7ff81e362e0a __CFRunLoopDoObservers + 543
5   CoreFoundation                	    0x7ff81e36228c __CFRunLoopRun + 840
6   CoreFoundation                	    0x7ff81e361884 CFRunLoopRunSpecific + 562
7   HIToolbox                     	    0x7ff827457ce6 RunCurrentEventLoopInMode + 292
8   HIToolbox                     	    0x7ff827457913 ReceiveNextEventCommon + 283
9   HIToolbox                     	    0x7ff8274577e5 _BlockUntilNextEventMatchingListInModeWithFilter + 70
10  AppKit                        	    0x7ff820cbf53d _DPSNextEvent + 927
11  AppKit                        	    0x7ff820cbdbfa -[NSApplication(NSEvent) _nextEventMatchingEventMask:untilDate:inMode:dequeue:] + 1394
12  AppKit                        	    0x7ff820cb02a9 -[NSApplication run] + 586
13  libqcocoa.dylib               	       0x11841562f QCocoaEventDispatcher::processEvents(QFlags<QEventLoop::ProcessEventsFlag>) + 2495
14  QtCore                        	       0x111ffaacf QEventLoop::exec(QFlags<QEventLoop::ProcessEventsFlag>) + 431
15  QtCore                        	       0x111fff042 QCoreApplication::exec() + 130
16  Logi Bolt                     	       0x1048c7a33 main + 2787
17  dyld                          	       0x206f2151e start + 462

Thread 1:: com.apple.rosetta.exceptionserver
0   runtime                       	    0x7ff7ffed89a4 0x7ff7ffed4000 + 18852
1   runtime                       	    0x7ff7ffee6738 0x7ff7ffed4000 + 75576
2   runtime                       	    0x7ff7ffee7ed0 0x7ff7ffed4000 + 81616

Thread 2:
0   runtime                       	    0x7ff7ffef6814 0x7ff7ffed4000 + 141332

Thread 3:
0   runtime                       	    0x7ff7ffef6814 0x7ff7ffed4000 + 141332

Thread 4:
0   runtime                       	    0x7ff7ffef6814 0x7ff7ffed4000 + 141332

Thread 5:: background-0
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 6:: background-1
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 7:: background-2
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 8:: background-3
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 9:: background-4
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 10:: background-5
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 11:: background-6
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 12:: background-7
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 13:: TimerKQueue
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2698ca kevent64 + 10
2   Logi Bolt                     	       0x104d03a32 thekogans::util::(anonymous namespace)::TimerKQueue::Run() + 66
3   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
4   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
5   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 14:: router-0
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 15:: router-1
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 16:: router-2
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 17:: router-3
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 18:: router-4
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 19:: router-5
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 20:: router-6
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 21:: router-7
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 22:: router callback-0
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 23:: router callback-1
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 24:: router callback-2
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 25:: router callback-3
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 26:: router callback-4
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 27:: router callback-5
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 28:: router callback-6
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 29:: router callback-7
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 30:: GlobalLoggerMgr
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 31:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 32:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 33:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 34:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 35:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 36:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 37:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 38:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 39:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 40:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 41:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 42:: scarif_aggregator_group_events-0
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 43:: scarif_aggregator_group_events-7
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 44:: scarif_aggregator_group_events-1
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 45:: scarif_aggregator_group_events-2
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 46:: scarif_aggregator_group_events-3
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 47:: scarif_aggregator_group_events-4
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 48:: scarif_aggregator_group_events-5
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 49:: scarif_aggregator_group_events-6
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 50:: scarif_aggregator_group_events-8
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 51:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 52:: scarif_background_tasks-0
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 53:: scarif_background_tasks-8
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 54:: scarif_background_tasks-1
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 55:: scarif_background_tasks-2
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 56:: scarif_background_tasks-3
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 57:: scarif_background_tasks-4
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 58:: scarif_background_tasks-5
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 59:: scarif_background_tasks-6
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 60:: scarif_background_tasks-7
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 61:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 62:: scarif_client/analytic_event_aggregator/background-6
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 63:: scarif_client/analytic_event_aggregator/background-0
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 64:: scarif_client/analytic_event_aggregator/background-1
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 65:: scarif_client/analytic_event_aggregator/background-7
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 66:: scarif_client/analytic_event_aggregator/background-2
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 67:: scarif_client/analytic_event_aggregator/background-3
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 68:: scarif_client/analytic_event_aggregator/background-4
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 69:: scarif_client/analytic_event_aggregator/background-5
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 70:: scarif_client/analytic_event_aggregator/background-8
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 71:: Adapters
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e26097a mach_msg_trap + 10
2   libsystem_kernel.dylib        	    0x7ff81e260ce8 mach_msg + 56
3   CoreFoundation                	    0x7ff81e363db0 __CFRunLoopServiceMachPort + 319
4   CoreFoundation                	    0x7ff81e362440 __CFRunLoopRun + 1276
5   CoreFoundation                	    0x7ff81e361884 CFRunLoopRunSpecific + 562
6   CoreFoundation                	    0x7ff81e3e8ec7 CFRunLoopRun + 40
7   Logi Bolt                     	       0x104bf7f1c thekogans::stream::Adapters::Run() + 348
8   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
9   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
10  libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 72:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   Logi Bolt                     	       0x104ccc668 thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&) + 72
4   Logi Bolt                     	       0x104d1760c thekogans::util::RunLoop::State::DeqJob(bool) + 172
5   Logi Bolt                     	       0x104cf5502 thekogans::util::JobQueue::State::Worker::Run() + 98
6   Logi Bolt                     	       0x104d39b12 thekogans::util::Thread::ThreadProc(void*) + 82
7   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 73:: scarif_network_checker-0
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 74:: scarif_network_checker-1
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 75:: scarif_network_checker-2
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 76:: scarif_network_checker-3
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 77:: scarif_network_checker-4
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 78:: scarif_network_checker-5
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 79:: scarif_network_checker-6
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 80:: scarif_network_checker-7
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 81:: scarif_network_checker-8
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 82:: scarif_network_checker-9
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 83:: QQmlThread
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2670aa poll + 10
2   QtCore                        	       0x112061220 qt_safe_poll(pollfd*, unsigned int, timespec const*) + 608
3   QtCore                        	       0x112062a21 QEventDispatcherUNIX::processEvents(QFlags<QEventLoop::ProcessEventsFlag>) + 849
4   QtCore                        	       0x111ffaacf QEventLoop::exec(QFlags<QEventLoop::ProcessEventsFlag>) + 431
5   QtCore                        	       0x111e27603 QThread::exec() + 131
6   QtQml                         	       0x115deb469 QQmlThreadPrivate::run() + 57
7   QtCore                        	       0x111e28619 QThreadPrivate::start(void*) + 329
8   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
9   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 84:: QQmlThread
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2670aa poll + 10
2   QtCore                        	       0x112061220 qt_safe_poll(pollfd*, unsigned int, timespec const*) + 608
3   QtCore                        	       0x112062a21 QEventDispatcherUNIX::processEvents(QFlags<QEventLoop::ProcessEventsFlag>) + 849
4   QtCore                        	       0x111ffaacf QEventLoop::exec(QFlags<QEventLoop::ProcessEventsFlag>) + 431
5   QtCore                        	       0x111e27603 QThread::exec() + 131
6   QtQml                         	       0x115deb469 QQmlThreadPrivate::run() + 57
7   QtCore                        	       0x111e28619 QThreadPrivate::start(void*) + 329
8   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
9   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 85:: Thread (pooled)
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   QtCore                        	       0x111e30aaf QWaitConditionPrivate::wait_relative(QDeadlineTimer) + 303
4   QtCore                        	       0x111e3077e QWaitConditionPrivate::wait(QDeadlineTimer) + 94
5   QtCore                        	       0x111e3069d QWaitCondition::wait(QMutex*, QDeadlineTimer) + 93
6   QtCore                        	       0x111e2cccd QThreadPoolThread::run() + 605
7   QtCore                        	       0x111e28619 QThreadPrivate::start(void*) + 329
8   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
9   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 86:: Thread (pooled)
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   QtCore                        	       0x111e30aaf QWaitConditionPrivate::wait_relative(QDeadlineTimer) + 303
4   QtCore                        	       0x111e3077e QWaitConditionPrivate::wait(QDeadlineTimer) + 94
5   QtCore                        	       0x111e3069d QWaitCondition::wait(QMutex*, QDeadlineTimer) + 93
6   QtCore                        	       0x111e2cccd QThreadPoolThread::run() + 605
7   QtCore                        	       0x111e28619 QThreadPrivate::start(void*) + 329
8   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
9   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 87:: Thread (pooled)
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   QtCore                        	       0x111e30aaf QWaitConditionPrivate::wait_relative(QDeadlineTimer) + 303
4   QtCore                        	       0x111e3077e QWaitConditionPrivate::wait(QDeadlineTimer) + 94
5   QtCore                        	       0x111e3069d QWaitCondition::wait(QMutex*, QDeadlineTimer) + 93
6   QtCore                        	       0x111e2cccd QThreadPoolThread::run() + 605
7   QtCore                        	       0x111e28619 QThreadPrivate::start(void*) + 329
8   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
9   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 88:: Thread (pooled)
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   QtCore                        	       0x111e30aaf QWaitConditionPrivate::wait_relative(QDeadlineTimer) + 303
4   QtCore                        	       0x111e3077e QWaitConditionPrivate::wait(QDeadlineTimer) + 94
5   QtCore                        	       0x111e3069d QWaitCondition::wait(QMutex*, QDeadlineTimer) + 93
6   QtCore                        	       0x111e2cccd QThreadPoolThread::run() + 605
7   QtCore                        	       0x111e28619 QThreadPrivate::start(void*) + 329
8   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
9   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 89:: Thread (pooled)
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   QtCore                        	       0x111e30aaf QWaitConditionPrivate::wait_relative(QDeadlineTimer) + 303
4   QtCore                        	       0x111e3077e QWaitConditionPrivate::wait(QDeadlineTimer) + 94
5   QtCore                        	       0x111e3069d QWaitCondition::wait(QMutex*, QDeadlineTimer) + 93
6   QtCore                        	       0x111e2cccd QThreadPoolThread::run() + 605
7   QtCore                        	       0x111e28619 QThreadPrivate::start(void*) + 329
8   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
9   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 90:: Thread (pooled)
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   QtCore                        	       0x111e30aaf QWaitConditionPrivate::wait_relative(QDeadlineTimer) + 303
4   QtCore                        	       0x111e3077e QWaitConditionPrivate::wait(QDeadlineTimer) + 94
5   QtCore                        	       0x111e3069d QWaitCondition::wait(QMutex*, QDeadlineTimer) + 93
6   QtCore                        	       0x111e2cccd QThreadPoolThread::run() + 605
7   QtCore                        	       0x111e28619 QThreadPrivate::start(void*) + 329
8   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
9   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 91:: Thread (pooled)
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   QtCore                        	       0x111e30aaf QWaitConditionPrivate::wait_relative(QDeadlineTimer) + 303
4   QtCore                        	       0x111e3077e QWaitConditionPrivate::wait(QDeadlineTimer) + 94
5   QtCore                        	       0x111e3069d QWaitCondition::wait(QMutex*, QDeadlineTimer) + 93
6   QtCore                        	       0x111e2cccd QThreadPoolThread::run() + 605
7   QtCore                        	       0x111e28619 QThreadPrivate::start(void*) + 329
8   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
9   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 92:: Thread (pooled)
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   QtCore                        	       0x111e30aaf QWaitConditionPrivate::wait_relative(QDeadlineTimer) + 303
4   QtCore                        	       0x111e3077e QWaitConditionPrivate::wait(QDeadlineTimer) + 94
5   QtCore                        	       0x111e3069d QWaitCondition::wait(QMutex*, QDeadlineTimer) + 93
6   QtCore                        	       0x111e2cccd QThreadPoolThread::run() + 605
7   QtCore                        	       0x111e28619 QThreadPrivate::start(void*) + 329
8   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
9   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 93:: scarif_job_queue-0
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 94:: scarif_job_queue-1
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 95:: scarif_job_queue-7
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 96:: scarif_job_queue-4
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 97:: scarif_job_queue-2
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 98:: scarif_job_queue-3
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 99:: scarif_job_queue-5
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 100:: scarif_job_queue-9
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 101:: scarif_job_queue-6
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 102:: scarif_job_queue-8
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x104a3e97b void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*) + 363
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 103:
0   runtime                       	    0x7ff7ffef6814 0x7ff7ffed4000 + 141332

Thread 104:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2632be __semwait_signal + 10
2   libsystem_c.dylib             	    0x7ff81e177853 nanosleep + 196
3   libc++.1.dylib                	    0x7ff81e205a51 std::__1::this_thread::sleep_for(std::__1::chrono::duration<long long, std::__1::ratio<1l, 1000000000l> > const&) + 73
4   Logi Bolt                     	       0x1048ede3f void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::frontend::main_widget::start_post_host_info_analytic_event_thread()::$_2> >(void*) + 63
5   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
6   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 105:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x10540ebb6 devio::job_queue_impl::thread_proc(std::__1::shared_ptr<devio::job_queue_impl>) + 550
5   Logi Bolt                     	       0x10540faf1 void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, void (devio::job_queue_impl::*)(std::__1::shared_ptr<devio::job_queue_impl>), devio::job_queue_impl*, std::__1::shared_ptr<devio::job_queue_impl> > >(void*) + 97
6   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
7   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 106:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e26097a mach_msg_trap + 10
2   libsystem_kernel.dylib        	    0x7ff81e260ce8 mach_msg + 56
3   CoreFoundation                	    0x7ff81e363db0 __CFRunLoopServiceMachPort + 319
4   CoreFoundation                	    0x7ff81e362440 __CFRunLoopRun + 1276
5   CoreFoundation                	    0x7ff81e361884 CFRunLoopRunSpecific + 562
6   CoreFoundation                	    0x7ff81e3e8ec7 CFRunLoopRun + 40
7   Logi Bolt                     	       0x1051c5957 devio::MacOSBus::thread_proc() + 327
8   Logi Bolt                     	       0x1051d106e void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, void (devio::MacOSBus::*)(), devio::MacOSBus*> >(void*) + 62
9   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
10  libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 107:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e26097a mach_msg_trap + 10
2   libsystem_kernel.dylib        	    0x7ff81e260ce8 mach_msg + 56
3   CoreFoundation                	    0x7ff81e363db0 __CFRunLoopServiceMachPort + 319
4   CoreFoundation                	    0x7ff81e362440 __CFRunLoopRun + 1276
5   CoreFoundation                	    0x7ff81e361884 CFRunLoopRunSpecific + 562
6   CoreFoundation                	    0x7ff81e3e8ec7 CFRunLoopRun + 40
7   Logi Bolt                     	       0x1051e2006 devio::MacOSDevice::onDeviceThread() + 502
8   Logi Bolt                     	       0x1051ddf3e devio::MacOSDevice::deviceThread(void*) + 14
9   Logi Bolt                     	       0x1051e420c void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, int (*)(void*), devio::MacOSDevice*> >(void*) + 44
10  libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
11  libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 108:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x1050bafda devio::Device::write_thread_proc(std::__1::weak_ptr<devio::Device>) + 314
5   Logi Bolt                     	       0x10511aa01 void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, void (devio::Device::*)(std::__1::weak_ptr<devio::Device>), devio::Device*, std::__1::weak_ptr<devio::Device> > >(void*) + 97
6   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
7   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 109:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e26097a mach_msg_trap + 10
2   libsystem_kernel.dylib        	    0x7ff81e260ce8 mach_msg + 56
3   CoreFoundation                	    0x7ff81e363db0 __CFRunLoopServiceMachPort + 319
4   CoreFoundation                	    0x7ff81e362440 __CFRunLoopRun + 1276
5   CoreFoundation                	    0x7ff81e361884 CFRunLoopRunSpecific + 562
6   CoreFoundation                	    0x7ff81e3e8ec7 CFRunLoopRun + 40
7   Logi Bolt                     	       0x1051e2006 devio::MacOSDevice::onDeviceThread() + 502
8   Logi Bolt                     	       0x1051ddf3e devio::MacOSDevice::deviceThread(void*) + 14
9   Logi Bolt                     	       0x1051e420c void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, int (*)(void*), devio::MacOSDevice*> >(void*) + 44
10  libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
11  libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 110:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e26097a mach_msg_trap + 10
2   libsystem_kernel.dylib        	    0x7ff81e260ce8 mach_msg + 56
3   CoreFoundation                	    0x7ff81e363db0 __CFRunLoopServiceMachPort + 319
4   CoreFoundation                	    0x7ff81e362440 __CFRunLoopRun + 1276
5   CoreFoundation                	    0x7ff81e361884 CFRunLoopRunSpecific + 562
6   CoreFoundation                	    0x7ff81e3e8ec7 CFRunLoopRun + 40
7   Logi Bolt                     	       0x1051e2006 devio::MacOSDevice::onDeviceThread() + 502
8   Logi Bolt                     	       0x1051ddf3e devio::MacOSDevice::deviceThread(void*) + 14
9   Logi Bolt                     	       0x1051e420c void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, int (*)(void*), devio::MacOSDevice*> >(void*) + 44
10  libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
11  libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 111:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x1050bafda devio::Device::write_thread_proc(std::__1::weak_ptr<devio::Device>) + 314
5   Logi Bolt                     	       0x10511aa01 void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, void (devio::Device::*)(std::__1::weak_ptr<devio::Device>), devio::Device*, std::__1::weak_ptr<devio::Device> > >(void*) + 97
6   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
7   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 112:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbd33 std::__1::condition_variable::__do_timed_wait(std::__1::unique_lock<std::__1::mutex>&, std::__1::chrono::time_point<std::__1::chrono::system_clock, std::__1::chrono::duration<long long, std::__1::ratio<1l, 1000000000l> > >) + 93
4   Logi Bolt                     	       0x1051fe425 devio::Timer::timer_thread_proc(int) + 165
5   Logi Bolt                     	       0x1051ff512 void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, void (devio::Timer::*)(int), devio::Timer*, int> >(void*) + 66
6   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
7   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 113:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x1050bafda devio::Device::write_thread_proc(std::__1::weak_ptr<devio::Device>) + 314
5   Logi Bolt                     	       0x10511aa01 void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, void (devio::Device::*)(std::__1::weak_ptr<devio::Device>), devio::Device*, std::__1::weak_ptr<devio::Device> > >(void*) + 97
6   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
7   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 114:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbd33 std::__1::condition_variable::__do_timed_wait(std::__1::unique_lock<std::__1::mutex>&, std::__1::chrono::time_point<std::__1::chrono::system_clock, std::__1::chrono::duration<long long, std::__1::ratio<1l, 1000000000l> > >) + 93
4   Logi Bolt                     	       0x1051fe425 devio::Timer::timer_thread_proc(int) + 165
5   Logi Bolt                     	       0x1051ff512 void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, void (devio::Timer::*)(int), devio::Timer*, int> >(void*) + 66
6   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
7   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15

Thread 115:
0   ???                           	    0x7ff8ae872940 ???
1   libsystem_kernel.dylib        	    0x7ff81e2633ea __psynch_cvwait + 10
2   libsystem_pthread.dylib       	    0x7ff81e29da6f _pthread_cond_wait + 1249
3   libc++.1.dylib                	    0x7ff81e1fbca2 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
4   Logi Bolt                     	       0x1050bafda devio::Device::write_thread_proc(std::__1::weak_ptr<devio::Device>) + 314
5   Logi Bolt                     	       0x10511aa01 void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, void (devio::Device::*)(std::__1::weak_ptr<devio::Device>), devio::Device*, std::__1::weak_ptr<devio::Device> > >(void*) + 97
6   libsystem_pthread.dylib       	    0x7ff81e29d4e1 _pthread_start + 125
7   libsystem_pthread.dylib       	    0x7ff81e298f6b thread_start + 15


Thread 0 crashed with X86 Thread State (64-bit):
  rax: 0x00007fb5f0c2c000  rbx: 0x00007ff81e130700  rcx: 0x0b5de2d2014e0058  rdx: 0x0000000000001401
  rdi: 0x000000030f84f4c0  rsi: 0x0000000000001592  rbp: 0x000000030f84f950  rsp: 0x000000030f84f920
   r8: 0x0000000000000192   r9: 0x000000030f84ef00  r10: 0x0000000000000192  r11: 0x00007fb5f0c2d592
  r12: 0x00007fb5f080de08  r13: 0x00006000033a0320  r14: 0x0000600000c50480  r15: 0x00007ff838968500
  rip: <unavailable>       rfl: 0x0000000000200202
 tmp0: 0x00007ff82103c5fa tmp1: 0x0000000000000215 tmp2: 0x00007ff8b28909ec


Binary Images:
    0x7ff820c81000 -     0x7ff821b0efff com.apple.AppKit (6.9) <92a78ebd-bba5-3f18-a5e1-768c955539d7> /System/Library/Frameworks/AppKit.framework/Versions/C/AppKit
    0x7ff81e2e4000 -     0x7ff81e7e4fff com.apple.CoreFoundation (6.9) <fa52ff10-225c-3a0f-bfcc-556795ccd233> /System/Library/Frameworks/CoreFoundation.framework/Versions/A/CoreFoundation
    0x7ff827428000 -     0x7ff82771bfff com.apple.HIToolbox (2.1.1) <7761967d-a138-33b6-9e3f-5c5420a2eeff> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/HIToolbox.framework/Versions/A/HIToolbox
       0x1183dc000 -        0x11854afff libqcocoa.dylib (*) <d4ab240b-4535-3aec-b72b-5ffc4750e4e5> /Applications/Logi Bolt.app/Contents/PlugIns/platforms/libqcocoa.dylib
       0x111e06000 -        0x112376fff org.qt-project.QtCore (5.15) <c723812a-f7a5-3001-98d5-e60e8daa6ffb> /Applications/Logi Bolt.app/Contents/Frameworks/QtCore.framework/Versions/5/QtCore
       0x10487e000 -        0x1060b3fff com.logi.bolt.app (1.2) <04efd306-1d9c-3c0b-9507-578a3a4ee676> /Applications/Logi Bolt.app/Contents/MacOS/Logi Bolt
       0x206f1c000 -        0x206f87fff dyld (*) <dd9e80de-fb3b-349b-96a4-46874ad34d11> /usr/lib/dyld
    0x7ff7ffed4000 -     0x7ff7fff03fff runtime (*) <24497be3-a1b4-360a-b90e-cde9ce78a93b> /usr/libexec/rosetta/runtime
               0x0 - 0xffffffffffffffff ??? (*) <00000000-0000-0000-0000-000000000000> ???
    0x7ff81e25f000 -     0x7ff81e296fff libsystem_kernel.dylib (*) <26a59789-b846-3ed4-96dc-8dbef3c0c8e7> /usr/lib/system/libsystem_kernel.dylib
    0x7ff81e297000 -     0x7ff81e2a2fff libsystem_pthread.dylib (*) <2f6c275d-7e14-3d31-a924-e1bb41d2415f> /usr/lib/system/libsystem_pthread.dylib
    0x7ff81e1f0000 -     0x7ff81e248fff libc++.1.dylib (*) <94af60f2-7351-357d-8d33-d1b719c36a95> /usr/lib/libc++.1.dylib
       0x115b58000 -        0x115eb0fff org.qt-project.QtQml (5.15) <8d7b72bf-f1f8-35c9-88ac-c4b1bcac7127> /Applications/Logi Bolt.app/Contents/Frameworks/QtQml.framework/Versions/5/QtQml
    0x7ff81e167000 -     0x7ff81e1effff libsystem_c.dylib (*) <8e54eca2-9bd8-3482-9589-b9574434d1aa> /usr/lib/system/libsystem_c.dylib

External Modification Summary:
  Calls made by other processes targeting this process:
    task_for_pid: 0
    thread_create: 0
    thread_set_state: 0
  Calls made by this process:
    task_for_pid: 0
    thread_create: 0
    thread_set_state: 0
  Calls made by all processes on this machine:
    task_for_pid: 0
    thread_create: 0
    thread_set_state: 0

VM Region Summary:
ReadOnly portion of Libraries: Total=1.0G resident=0K(0%) swapped_out_or_unallocated=1.0G(100%)
Writable regions: Total=1.2G written=0K(0%) resident=0K(0%) swapped_out=0K(0%) unallocated=1.2G(100%)

                                VIRTUAL   REGION
REGION TYPE                        SIZE    COUNT (non-coalesced)
===========                     =======  =======
Accelerate framework               256K        2
Activity Tracing                   256K        1
CG backing stores                 3520K        8
CG image                            12K        3
ColorSync                          228K       25
CoreAnimation                       16K        2
CoreGraphics                         8K        2
CoreUI image data                  412K        4
Foundation                          16K        1
JS VM Gigacage                    8192K        2
JS VM Isolated Heap               8720K        8
JS VM Isolated Heap (reserved)    4080K        2         reserved VM address space (unallocated)
Kernel Alloc Once                    8K        1
MALLOC                           244.2M       43
MALLOC guard page                  192K        8
MALLOC_MEDIUM (reserved)         344.0M        3         reserved VM address space (unallocated)
MALLOC_NANO (reserved)           384.0M        1         reserved VM address space (unallocated)
OpenGL GLSL                        256K        3
Rosetta Arena                     4096K        2
Rosetta Generic                   1092K      270
Rosetta IndirectBranch            1024K        1
Rosetta JIT                      128.0M        1
Rosetta Return Stack              2300K      230
Rosetta Thread Context            2300K      230
STACK GUARD                         16K        4
Stack                             81.1M      136
Stack Guard                       56.4M      111
VM_ALLOCATE                       3796K       70
VM_ALLOCATE (reserved)              24K        3         reserved VM address space (unallocated)
__DATA                            21.6M      351
__DATA_CONST                      12.4M      184
__DATA_DIRTY                       546K      103
__FONT_DATA                          4K        1
__GLSLBUILTINS                    5176K        1
__LINKEDIT                       734.4M       46
__OBJC_RO                         82.6M        1
__OBJC_RW                         3200K        2
__TEXT                           284.6M      361
__UNICODE                          592K        1
dyld private memory               1184K        3
mapped file                        5.5G      560
shared memory                      808K       16
unshared pmap                     10.4M        7
===========                     =======  =======
TOTAL                              7.9G     2814
TOTAL, minus reserved VM space     7.2G     2814



-----------
Full Report
-----------

{"app_name":"Logi Bolt","timestamp":"2022-07-07 14:06:41.00 -0700","app_version":"1.2","slice_uuid":"04efd306-1d9c-3c0b-9507-578a3a4ee676","build_version":"1.2.6024","platform":1,"bundleID":"com.logi.bolt.app","share_with_app_devs":0,"is_first_party":0,"bug_type":"309","os_version":"macOS 12.3.1 (21E258)","incident_id":"D5889587-15A8-4545-8262-91EBF043F27A","name":"Logi Bolt"}
{
  "uptime" : 1900000,
  "procLaunch" : "2022-07-07 14:06:32.5731 -0700",
  "procRole" : "Foreground",
  "version" : 2,
  "userID" : 501,
  "deployVersion" : 210,
  "modelCode" : "MacBookAir10,1",
  "procStartAbsTime" : 46540729353700,
  "coalitionID" : 274494,
  "osVersion" : {
    "train" : "macOS 12.3.1",
    "build" : "21E258",
    "releaseType" : "User"
  },
  "captureTime" : "2022-07-07 14:06:38.4053 -0700",
  "incident" : "D5889587-15A8-4545-8262-91EBF043F27A",
  "bug_type" : "309",
  "pid" : 2619,
  "procExitAbsTime" : 46540868374024,
  "translated" : true,
  "cpuType" : "X86-64",
  "procName" : "Logi Bolt",
  "procPath" : "\/Applications\/Logi Bolt.app\/Contents\/MacOS\/Logi Bolt",
  "bundleInfo" : {"CFBundleShortVersionString":"1.2","CFBundleVersion":"1.2.6024","CFBundleIdentifier":"com.logi.bolt.app"},
  "storeInfo" : {"deviceIdentifierForVendor":"57014446-DC73-5C70-A61B-8312FD9AFD1D","thirdParty":true},
  "parentProc" : "launchd",
  "parentPid" : 1,
  "coalitionName" : "com.logi.bolt.app",
  "crashReporterKey" : "8C91BE94-9769-0991-42E8-E7EDF104A81A",
  "wakeTime" : 28072,
  "sleepWakeUUID" : "F5ED13EA-1A9A-4D82-99FB-AD35B159D83A",
  "sip" : "enabled",
  "isCorpse" : 1,
  "exception" : {"codes":"0x0000000000000001, 0x0000000000000000","rawCodes":[1,0],"type":"EXC_BAD_INSTRUCTION","signal":"SIGILL"},
  "termination" : {"flags":0,"code":4,"namespace":"SIGNAL","indicator":"Illegal instruction: 4","byProc":"exc handler","byPid":2619},
  "ktriageinfo" : "VM - pmap_enter failed with resource shortage\nVM - pmap_enter failed with resource shortage\nVM - pmap_enter failed with resource shortage\nVM - pmap_enter failed with resource shortage\nVM - pmap_enter failed with resource shortage\n",
  "asi" : {"AppKit":["Crashing on exception: CGSSetSurfaceColorSpace failed with 1000"]},
  "asiBacktraces" : ["0   CoreFoundation                      0x00007ff81e3de7fb __exceptionPreprocess + 242\n1   libobjc.A.dylib                     0x00007ff81e13fe58 objc_exception_throw + 48\n2   Foundation                          0x00007ff81f1f97e3 -[NSMutableDictionary(NSMutableDictionary) initWithContentsOfFile:] + 0\n3   AppKit                              0x00007ff8216fd5dc set_surface_colorspace + 124\n4   AppKit                              0x00007ff821334ade NSOpenGLContextUpdateOffScreenViewSurface + 566\n5   AppKit                              0x00007ff821003e83 NSOpenGLContextAttachOffScreenViewSurface + 91\n6   AppKit                              0x00007ff821334162 __27-[NSOpenGLContext setView:]_block_invoke + 432\n7   AppKit                              0x00007ff820d0e1e7 NSPerformVisuallyAtomicChange + 132\n8   AppKit                              0x00007ff821003bf2 -[NSOpenGLContext setView:] + 139\n9   libqcocoa.dylib                     0x00000001184350bd _ZN15QCocoaGLContext11setDrawableEP16QPlatformSurface + 1277\n10  libqcocoa.dylib                     0x0000000118434a38 _ZN15QCocoaGLContext11makeCurrentEP16QPlatformSurface + 344\n11  QtGui                               0x0000000112bd48fc _ZN14QOpenGLContext11makeCurrentEP8QSurface + 172\n12  QtGui                               0x0000000112e7b1bd _ZN21QPlatformBackingStore15composeAndFlushEP7QWindowRK7QRegionRK6QPointP20QPlatformTextureListb + 301\n13  QtWidgets                           0x0000000113b45a74 _ZN21QWidgetRepaintManager5flushEP7QWidgetRK7QRegionP20QPlatformTextureList + 1028\n14  QtWidgets                           0x0000000113b47bed _ZN21QWidgetRepaintManager5flushEv + 605\n15  QtWidgets                           0x0000000113b46f98 _ZN21QWidgetRepaintManager13paintAndFlushEv + 4872\n16  QtWidgets                           0x0000000113b45455 _ZN21QWidgetRepaintManager4syncEP7QWidgetRK7QRegion + 613\n17  QtWidgets                           0x0000000113b94a54 _ZN13QWidgetWindow17handleExposeEventEP12QExposeEvent + 372\n18  QtWidgets                           0x0000000113b91a46 _ZN13QWidgetWindow5eventEP6QEvent + 1094\n19  QtWidgets                           0x0000000113b399ea _ZN19QApplicationPrivate13notify_helperEP7QObjectP6QEvent + 266\n20  QtWidgets                           0x0000000113b3ae11 _ZN12QApplication6notifyEP7QObjectP6QEvent + 497\n21  QtCore                              0x0000000111ffea34 _ZN16QCoreApplication15notifyInternal2EP7QObjectP6QEvent + 212\n22  QtGui                               0x0000000112b8d7f2 _ZN22QGuiApplicationPrivate18processExposeEventEPN29QWindowSystemInterfacePrivate11ExposeEventE + 306\n23  QtGui                               0x0000000112b698f3 _ZN29QWindowSystemInterfacePrivate23handleWindowSystemEventIN22QWindowSystemInterface19SynchronousDeliveryEEEbPNS_17WindowSystemEventE + 115\n24  QtGui                               0x0000000112b70f92 _ZN22QWindowSystemInterface17handleExposeEventINS_19SynchronousDeliveryEEEvP7QWindowRK7QRegion + 178\n25  libqcocoa.dylib                     0x00000001183fe20c _ZN12QCocoaWindow17handleExposeEventERK7QRegion + 460\n26  libqcocoa.dylib                     0x0000000118406afb -[QNSView(Drawing) displayLayer:] + 907\n27  AppKit                              0x00007ff820e1a375 -[_NSBackingLayer display] + 462\n28  AppKit                              0x00007ff820d8f93d -[_NSViewBackingLayer display] + 554\n29  QuartzCore                          0x00007ff82587f951 _ZN2CA5Layer17display_if_neededEPNS_11TransactionE + 873\n30  QuartzCore                          0x00007ff8259d6336 _ZN2CA7Context18commit_transactionEPNS_11TransactionEdPd + 640\n31  QuartzCore                          0x00007ff825861231 _ZN2CA11Transaction6commitEv + 777\n32  AppKit                              0x00007ff820e2b761 __62+[CATransaction(NSCATransaction) NS_setFlushesWithDisplayLink]_block_invoke + 285\n33  AppKit                              0x00007ff821572668 ___NSRunLoopObserverCreateWithHandler_block_invoke + 41\n34  CoreFoundation                      0x00007ff81e362f75 __CFRUNLOOP_IS_CALLING_OUT_TO_AN_OBSERVER_CALLBACK_FUNCTION__ + 23\n35  CoreFoundation                      0x00007ff81e362e0a __CFRunLoopDoObservers + 543\n36  CoreFoundation                      0x00007ff81e36228c __CFRunLoopRun + 840\n37  CoreFoundation                      0x00007ff81e361884 CFRunLoopRunSpecific + 562\n38  HIToolbox                           0x00007ff827457ce6 RunCurrentEventLoopInMode + 292\n39  HIToolbox                           0x00007ff827457913 ReceiveNextEventCommon + 283\n40  HIToolbox                           0x00007ff8274577e5 _BlockUntilNextEventMatchingListInModeWithFilter + 70\n41  AppKit                              0x00007ff820cbf53d _DPSNextEvent + 927\n42  AppKit                              0x00007ff820cbdbfa -[NSApplication(NSEvent) _nextEventMatchingEventMask:untilDate:inMode:dequeue:] + 1394\n43  AppKit                              0x00007ff820cb02a9 -[NSApplication run] + 586\n44  libqcocoa.dylib                     0x000000011841562f _ZN21QCocoaEventDispatcher13processEventsE6QFlagsIN10QEventLoop17ProcessEventsFlagEE + 2495\n45  QtCore                              0x0000000111ffaacf _ZN10QEventLoop4execE6QFlagsINS_17ProcessEventsFlagEE + 431\n46  QtCore                              0x0000000111fff042 _ZN16QCoreApplication4execEv + 130\n47  Logi Bolt                           0x00000001048c7a33 main + 2787\n48  dyld                                0x0000000206f2151e start + 462\n49  dyld                                0x0000000206f1c000 dyld + 0"],
  "extMods" : {"caller":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"system":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"targeted":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"warnings":0},
  "faultingThread" : 0,
  "threads" : [{"triggered":true,"id":29296659,"threadState":{"flavor":"x86_THREAD_STATE","rbp":{"value":13145274704},"r12":{"value":140419400785416},"rosetta":{"tmp2":{"value":140706123942380},"tmp1":{"value":533},"tmp0":{"value":140703682512378}},"rbx":{"value":140703633180416,"symbolLocation":0,"symbol":"objc_msgSend"},"r8":{"value":402},"r15":{"value":140704078005504,"objc-selector":"callStackSymbols"},"r10":{"value":402},"rdx":{"value":5121},"rdi":{"value":13145273536},"r9":{"value":13145272064},"r13":{"value":105553170400032},"rflags":{"value":2097666},"rax":{"value":140419405103104},"rsp":{"value":13145274656},"r11":{"value":140419405108626},"rcx":{"value":819060098844196952},"r14":{"value":105553129178240},"rsi":{"value":5522}},"queue":"com.apple.main-thread","frames":[{"imageOffset":3913210,"symbol":"-[NSApplication _crashOnException:]","symbolLocation":313,"imageIndex":0},{"imageOffset":1747357,"symbol":"__62+[CATransaction(NSCATransaction) NS_setFlushesWithDisplayLink]_block_invoke","symbolLocation":857,"imageIndex":0},{"imageOffset":9377384,"symbol":"___NSRunLoopObserverCreateWithHandler_block_invoke","symbolLocation":41,"imageIndex":0},{"imageOffset":520053,"symbol":"__CFRUNLOOP_IS_CALLING_OUT_TO_AN_OBSERVER_CALLBACK_FUNCTION__","symbolLocation":23,"imageIndex":1},{"imageOffset":519690,"symbol":"__CFRunLoopDoObservers","symbolLocation":543,"imageIndex":1},{"imageOffset":516748,"symbol":"__CFRunLoopRun","symbolLocation":840,"imageIndex":1},{"imageOffset":514180,"symbol":"CFRunLoopRunSpecific","symbolLocation":562,"imageIndex":1},{"imageOffset":195814,"symbol":"RunCurrentEventLoopInMode","symbolLocation":292,"imageIndex":2},{"imageOffset":194835,"symbol":"ReceiveNextEventCommon","symbolLocation":283,"imageIndex":2},{"imageOffset":194533,"symbol":"_BlockUntilNextEventMatchingListInModeWithFilter","symbolLocation":70,"imageIndex":2},{"imageOffset":255293,"symbol":"_DPSNextEvent","symbolLocation":927,"imageIndex":0},{"imageOffset":248826,"symbol":"-[NSApplication(NSEvent) _nextEventMatchingEventMask:untilDate:inMode:dequeue:]","symbolLocation":1394,"imageIndex":0},{"imageOffset":193193,"symbol":"-[NSApplication run]","symbolLocation":586,"imageIndex":0},{"imageOffset":235055,"symbol":"QCocoaEventDispatcher::processEvents(QFlags<QEventLoop::ProcessEventsFlag>)","symbolLocation":2495,"imageIndex":3},{"imageOffset":2050767,"symbol":"QEventLoop::exec(QFlags<QEventLoop::ProcessEventsFlag>)","symbolLocation":431,"imageIndex":4},{"imageOffset":2068546,"symbol":"QCoreApplication::exec()","symbolLocation":130,"imageIndex":4},{"imageOffset":301619,"symbol":"main","symbolLocation":2787,"imageIndex":5},{"imageOffset":21790,"symbol":"start","symbolLocation":462,"imageIndex":6}]},{"id":29296668,"name":"com.apple.rosetta.exceptionserver","frames":[{"imageOffset":18852,"imageIndex":7},{"imageOffset":75576,"imageIndex":7},{"imageOffset":81616,"imageIndex":7}]},{"id":29296692,"frames":[{"imageOffset":141332,"imageIndex":7}]},{"id":29296693,"frames":[{"imageOffset":141332,"imageIndex":7}]},{"id":29296694,"frames":[{"imageOffset":141332,"imageIndex":7}]},{"id":29296695,"name":"background-0","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296696,"name":"background-1","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296697,"name":"background-2","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296698,"name":"background-3","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296699,"name":"background-4","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296700,"name":"background-5","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296701,"name":"background-6","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296702,"name":"background-7","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296703,"name":"TimerKQueue","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":43210,"symbol":"kevent64","symbolLocation":10,"imageIndex":9},{"imageOffset":4741682,"symbol":"thekogans::util::(anonymous namespace)::TimerKQueue::Run()","symbolLocation":66,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296704,"name":"router-0","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296705,"name":"router-1","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296706,"name":"router-2","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296707,"name":"router-3","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296708,"name":"router-4","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296709,"name":"router-5","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296710,"name":"router-6","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296711,"name":"router-7","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296712,"name":"router callback-0","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296713,"name":"router callback-1","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296714,"name":"router callback-2","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296715,"name":"router callback-3","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296716,"name":"router callback-4","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296717,"name":"router callback-5","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296718,"name":"router callback-6","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296719,"name":"router callback-7","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296720,"name":"GlobalLoggerMgr","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296756,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296757,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296758,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296759,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296760,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296761,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296762,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296763,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296764,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296765,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296776,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296777,"name":"scarif_aggregator_group_events-0","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296778,"name":"scarif_aggregator_group_events-7","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296779,"name":"scarif_aggregator_group_events-1","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296780,"name":"scarif_aggregator_group_events-2","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296781,"name":"scarif_aggregator_group_events-3","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296782,"name":"scarif_aggregator_group_events-4","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296783,"name":"scarif_aggregator_group_events-5","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296784,"name":"scarif_aggregator_group_events-6","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296785,"name":"scarif_aggregator_group_events-8","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296786,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296787,"name":"scarif_background_tasks-0","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296788,"name":"scarif_background_tasks-8","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296789,"name":"scarif_background_tasks-1","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296790,"name":"scarif_background_tasks-2","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296791,"name":"scarif_background_tasks-3","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296792,"name":"scarif_background_tasks-4","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296793,"name":"scarif_background_tasks-5","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296794,"name":"scarif_background_tasks-6","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296795,"name":"scarif_background_tasks-7","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296796,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296797,"name":"scarif_client\/analytic_event_aggregator\/background-6","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296798,"name":"scarif_client\/analytic_event_aggregator\/background-0","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296799,"name":"scarif_client\/analytic_event_aggregator\/background-1","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296800,"name":"scarif_client\/analytic_event_aggregator\/background-7","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296801,"name":"scarif_client\/analytic_event_aggregator\/background-2","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296802,"name":"scarif_client\/analytic_event_aggregator\/background-3","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296803,"name":"scarif_client\/analytic_event_aggregator\/background-4","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296804,"name":"scarif_client\/analytic_event_aggregator\/background-5","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296805,"name":"scarif_client\/analytic_event_aggregator\/background-8","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296806,"name":"Adapters","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":6522,"symbol":"mach_msg_trap","symbolLocation":10,"imageIndex":9},{"imageOffset":7400,"symbol":"mach_msg","symbolLocation":56,"imageIndex":9},{"imageOffset":523696,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":319,"imageIndex":1},{"imageOffset":517184,"symbol":"__CFRunLoopRun","symbolLocation":1276,"imageIndex":1},{"imageOffset":514180,"symbol":"CFRunLoopRunSpecific","symbolLocation":562,"imageIndex":1},{"imageOffset":1068743,"symbol":"CFRunLoopRun","symbolLocation":40,"imageIndex":1},{"imageOffset":3645212,"symbol":"thekogans::stream::Adapters::Run()","symbolLocation":348,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296807,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":4515432,"symbol":"thekogans::util::Condition::Wait(thekogans::util::TimeSpec const&)","symbolLocation":72,"imageIndex":5},{"imageOffset":4822540,"symbol":"thekogans::util::RunLoop::State::DeqJob(bool)","symbolLocation":172,"imageIndex":5},{"imageOffset":4683010,"symbol":"thekogans::util::JobQueue::State::Worker::Run()","symbolLocation":98,"imageIndex":5},{"imageOffset":4963090,"symbol":"thekogans::util::Thread::ThreadProc(void*)","symbolLocation":82,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296808,"name":"scarif_network_checker-0","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296809,"name":"scarif_network_checker-1","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296810,"name":"scarif_network_checker-2","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296811,"name":"scarif_network_checker-3","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296812,"name":"scarif_network_checker-4","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296813,"name":"scarif_network_checker-5","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296814,"name":"scarif_network_checker-6","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296815,"name":"scarif_network_checker-7","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296816,"name":"scarif_network_checker-8","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296817,"name":"scarif_network_checker-9","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296826,"name":"QQmlThread","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":32938,"symbol":"poll","symbolLocation":10,"imageIndex":9},{"imageOffset":2470432,"symbol":"qt_safe_poll(pollfd*, unsigned int, timespec const*)","symbolLocation":608,"imageIndex":4},{"imageOffset":2476577,"symbol":"QEventDispatcherUNIX::processEvents(QFlags<QEventLoop::ProcessEventsFlag>)","symbolLocation":849,"imageIndex":4},{"imageOffset":2050767,"symbol":"QEventLoop::exec(QFlags<QEventLoop::ProcessEventsFlag>)","symbolLocation":431,"imageIndex":4},{"imageOffset":136707,"symbol":"QThread::exec()","symbolLocation":131,"imageIndex":4},{"imageOffset":2700393,"symbol":"QQmlThreadPrivate::run()","symbolLocation":57,"imageIndex":12},{"imageOffset":140825,"symbol":"QThreadPrivate::start(void*)","symbolLocation":329,"imageIndex":4},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296831,"name":"QQmlThread","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":32938,"symbol":"poll","symbolLocation":10,"imageIndex":9},{"imageOffset":2470432,"symbol":"qt_safe_poll(pollfd*, unsigned int, timespec const*)","symbolLocation":608,"imageIndex":4},{"imageOffset":2476577,"symbol":"QEventDispatcherUNIX::processEvents(QFlags<QEventLoop::ProcessEventsFlag>)","symbolLocation":849,"imageIndex":4},{"imageOffset":2050767,"symbol":"QEventLoop::exec(QFlags<QEventLoop::ProcessEventsFlag>)","symbolLocation":431,"imageIndex":4},{"imageOffset":136707,"symbol":"QThread::exec()","symbolLocation":131,"imageIndex":4},{"imageOffset":2700393,"symbol":"QQmlThreadPrivate::run()","symbolLocation":57,"imageIndex":12},{"imageOffset":140825,"symbol":"QThreadPrivate::start(void*)","symbolLocation":329,"imageIndex":4},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296833,"name":"Thread (pooled)","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":174767,"symbol":"QWaitConditionPrivate::wait_relative(QDeadlineTimer)","symbolLocation":303,"imageIndex":4},{"imageOffset":173950,"symbol":"QWaitConditionPrivate::wait(QDeadlineTimer)","symbolLocation":94,"imageIndex":4},{"imageOffset":173725,"symbol":"QWaitCondition::wait(QMutex*, QDeadlineTimer)","symbolLocation":93,"imageIndex":4},{"imageOffset":158925,"symbol":"QThreadPoolThread::run()","symbolLocation":605,"imageIndex":4},{"imageOffset":140825,"symbol":"QThreadPrivate::start(void*)","symbolLocation":329,"imageIndex":4},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296834,"name":"Thread (pooled)","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":174767,"symbol":"QWaitConditionPrivate::wait_relative(QDeadlineTimer)","symbolLocation":303,"imageIndex":4},{"imageOffset":173950,"symbol":"QWaitConditionPrivate::wait(QDeadlineTimer)","symbolLocation":94,"imageIndex":4},{"imageOffset":173725,"symbol":"QWaitCondition::wait(QMutex*, QDeadlineTimer)","symbolLocation":93,"imageIndex":4},{"imageOffset":158925,"symbol":"QThreadPoolThread::run()","symbolLocation":605,"imageIndex":4},{"imageOffset":140825,"symbol":"QThreadPrivate::start(void*)","symbolLocation":329,"imageIndex":4},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296835,"name":"Thread (pooled)","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":174767,"symbol":"QWaitConditionPrivate::wait_relative(QDeadlineTimer)","symbolLocation":303,"imageIndex":4},{"imageOffset":173950,"symbol":"QWaitConditionPrivate::wait(QDeadlineTimer)","symbolLocation":94,"imageIndex":4},{"imageOffset":173725,"symbol":"QWaitCondition::wait(QMutex*, QDeadlineTimer)","symbolLocation":93,"imageIndex":4},{"imageOffset":158925,"symbol":"QThreadPoolThread::run()","symbolLocation":605,"imageIndex":4},{"imageOffset":140825,"symbol":"QThreadPrivate::start(void*)","symbolLocation":329,"imageIndex":4},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296836,"name":"Thread (pooled)","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":174767,"symbol":"QWaitConditionPrivate::wait_relative(QDeadlineTimer)","symbolLocation":303,"imageIndex":4},{"imageOffset":173950,"symbol":"QWaitConditionPrivate::wait(QDeadlineTimer)","symbolLocation":94,"imageIndex":4},{"imageOffset":173725,"symbol":"QWaitCondition::wait(QMutex*, QDeadlineTimer)","symbolLocation":93,"imageIndex":4},{"imageOffset":158925,"symbol":"QThreadPoolThread::run()","symbolLocation":605,"imageIndex":4},{"imageOffset":140825,"symbol":"QThreadPrivate::start(void*)","symbolLocation":329,"imageIndex":4},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296837,"name":"Thread (pooled)","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":174767,"symbol":"QWaitConditionPrivate::wait_relative(QDeadlineTimer)","symbolLocation":303,"imageIndex":4},{"imageOffset":173950,"symbol":"QWaitConditionPrivate::wait(QDeadlineTimer)","symbolLocation":94,"imageIndex":4},{"imageOffset":173725,"symbol":"QWaitCondition::wait(QMutex*, QDeadlineTimer)","symbolLocation":93,"imageIndex":4},{"imageOffset":158925,"symbol":"QThreadPoolThread::run()","symbolLocation":605,"imageIndex":4},{"imageOffset":140825,"symbol":"QThreadPrivate::start(void*)","symbolLocation":329,"imageIndex":4},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296838,"name":"Thread (pooled)","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":174767,"symbol":"QWaitConditionPrivate::wait_relative(QDeadlineTimer)","symbolLocation":303,"imageIndex":4},{"imageOffset":173950,"symbol":"QWaitConditionPrivate::wait(QDeadlineTimer)","symbolLocation":94,"imageIndex":4},{"imageOffset":173725,"symbol":"QWaitCondition::wait(QMutex*, QDeadlineTimer)","symbolLocation":93,"imageIndex":4},{"imageOffset":158925,"symbol":"QThreadPoolThread::run()","symbolLocation":605,"imageIndex":4},{"imageOffset":140825,"symbol":"QThreadPrivate::start(void*)","symbolLocation":329,"imageIndex":4},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296839,"name":"Thread (pooled)","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":174767,"symbol":"QWaitConditionPrivate::wait_relative(QDeadlineTimer)","symbolLocation":303,"imageIndex":4},{"imageOffset":173950,"symbol":"QWaitConditionPrivate::wait(QDeadlineTimer)","symbolLocation":94,"imageIndex":4},{"imageOffset":173725,"symbol":"QWaitCondition::wait(QMutex*, QDeadlineTimer)","symbolLocation":93,"imageIndex":4},{"imageOffset":158925,"symbol":"QThreadPoolThread::run()","symbolLocation":605,"imageIndex":4},{"imageOffset":140825,"symbol":"QThreadPrivate::start(void*)","symbolLocation":329,"imageIndex":4},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296840,"name":"Thread (pooled)","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":174767,"symbol":"QWaitConditionPrivate::wait_relative(QDeadlineTimer)","symbolLocation":303,"imageIndex":4},{"imageOffset":173950,"symbol":"QWaitConditionPrivate::wait(QDeadlineTimer)","symbolLocation":94,"imageIndex":4},{"imageOffset":173725,"symbol":"QWaitCondition::wait(QMutex*, QDeadlineTimer)","symbolLocation":93,"imageIndex":4},{"imageOffset":158925,"symbol":"QThreadPoolThread::run()","symbolLocation":605,"imageIndex":4},{"imageOffset":140825,"symbol":"QThreadPrivate::start(void*)","symbolLocation":329,"imageIndex":4},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296841,"name":"scarif_job_queue-0","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296842,"name":"scarif_job_queue-1","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296843,"name":"scarif_job_queue-7","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296844,"name":"scarif_job_queue-4","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296845,"name":"scarif_job_queue-2","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296846,"name":"scarif_job_queue-3","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296847,"name":"scarif_job_queue-5","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296848,"name":"scarif_job_queue-9","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296849,"name":"scarif_job_queue-6","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296850,"name":"scarif_job_queue-8","frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":1837435,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::concurrent::impl::ExecutorPool::_adjustThreadPool()::$_3> >(void*)","symbolLocation":363,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296852,"frames":[{"imageOffset":141332,"imageIndex":7}]},{"id":29296857,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17086,"symbol":"__semwait_signal","symbolLocation":10,"imageIndex":9},{"imageOffset":67667,"symbol":"nanosleep","symbolLocation":196,"imageIndex":13},{"imageOffset":88657,"symbol":"std::__1::this_thread::sleep_for(std::__1::chrono::duration<long long, std::__1::ratio<1l, 1000000000l> > const&)","symbolLocation":73,"imageIndex":11},{"imageOffset":458303,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, logi::frontend::main_widget::start_post_host_info_analytic_event_thread()::$_2> >(void*)","symbolLocation":63,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296865,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":12127158,"symbol":"devio::job_queue_impl::thread_proc(std::__1::shared_ptr<devio::job_queue_impl>)","symbolLocation":550,"imageIndex":5},{"imageOffset":12131057,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, void (devio::job_queue_impl::*)(std::__1::shared_ptr<devio::job_queue_impl>), devio::job_queue_impl*, std::__1::shared_ptr<devio::job_queue_impl> > >(void*)","symbolLocation":97,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296866,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":6522,"symbol":"mach_msg_trap","symbolLocation":10,"imageIndex":9},{"imageOffset":7400,"symbol":"mach_msg","symbolLocation":56,"imageIndex":9},{"imageOffset":523696,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":319,"imageIndex":1},{"imageOffset":517184,"symbol":"__CFRunLoopRun","symbolLocation":1276,"imageIndex":1},{"imageOffset":514180,"symbol":"CFRunLoopRunSpecific","symbolLocation":562,"imageIndex":1},{"imageOffset":1068743,"symbol":"CFRunLoopRun","symbolLocation":40,"imageIndex":1},{"imageOffset":9730391,"symbol":"devio::MacOSBus::thread_proc()","symbolLocation":327,"imageIndex":5},{"imageOffset":9777262,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, void (devio::MacOSBus::*)(), devio::MacOSBus*> >(void*)","symbolLocation":62,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296869,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":6522,"symbol":"mach_msg_trap","symbolLocation":10,"imageIndex":9},{"imageOffset":7400,"symbol":"mach_msg","symbolLocation":56,"imageIndex":9},{"imageOffset":523696,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":319,"imageIndex":1},{"imageOffset":517184,"symbol":"__CFRunLoopRun","symbolLocation":1276,"imageIndex":1},{"imageOffset":514180,"symbol":"CFRunLoopRunSpecific","symbolLocation":562,"imageIndex":1},{"imageOffset":1068743,"symbol":"CFRunLoopRun","symbolLocation":40,"imageIndex":1},{"imageOffset":9846790,"symbol":"devio::MacOSDevice::onDeviceThread()","symbolLocation":502,"imageIndex":5},{"imageOffset":9830206,"symbol":"devio::MacOSDevice::deviceThread(void*)","symbolLocation":14,"imageIndex":5},{"imageOffset":9855500,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, int (*)(void*), devio::MacOSDevice*> >(void*)","symbolLocation":44,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296870,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":8638426,"symbol":"devio::Device::write_thread_proc(std::__1::weak_ptr<devio::Device>)","symbolLocation":314,"imageIndex":5},{"imageOffset":9030145,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, void (devio::Device::*)(std::__1::weak_ptr<devio::Device>), devio::Device*, std::__1::weak_ptr<devio::Device> > >(void*)","symbolLocation":97,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296871,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":6522,"symbol":"mach_msg_trap","symbolLocation":10,"imageIndex":9},{"imageOffset":7400,"symbol":"mach_msg","symbolLocation":56,"imageIndex":9},{"imageOffset":523696,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":319,"imageIndex":1},{"imageOffset":517184,"symbol":"__CFRunLoopRun","symbolLocation":1276,"imageIndex":1},{"imageOffset":514180,"symbol":"CFRunLoopRunSpecific","symbolLocation":562,"imageIndex":1},{"imageOffset":1068743,"symbol":"CFRunLoopRun","symbolLocation":40,"imageIndex":1},{"imageOffset":9846790,"symbol":"devio::MacOSDevice::onDeviceThread()","symbolLocation":502,"imageIndex":5},{"imageOffset":9830206,"symbol":"devio::MacOSDevice::deviceThread(void*)","symbolLocation":14,"imageIndex":5},{"imageOffset":9855500,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, int (*)(void*), devio::MacOSDevice*> >(void*)","symbolLocation":44,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296874,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":6522,"symbol":"mach_msg_trap","symbolLocation":10,"imageIndex":9},{"imageOffset":7400,"symbol":"mach_msg","symbolLocation":56,"imageIndex":9},{"imageOffset":523696,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":319,"imageIndex":1},{"imageOffset":517184,"symbol":"__CFRunLoopRun","symbolLocation":1276,"imageIndex":1},{"imageOffset":514180,"symbol":"CFRunLoopRunSpecific","symbolLocation":562,"imageIndex":1},{"imageOffset":1068743,"symbol":"CFRunLoopRun","symbolLocation":40,"imageIndex":1},{"imageOffset":9846790,"symbol":"devio::MacOSDevice::onDeviceThread()","symbolLocation":502,"imageIndex":5},{"imageOffset":9830206,"symbol":"devio::MacOSDevice::deviceThread(void*)","symbolLocation":14,"imageIndex":5},{"imageOffset":9855500,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, int (*)(void*), devio::MacOSDevice*> >(void*)","symbolLocation":44,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296875,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":8638426,"symbol":"devio::Device::write_thread_proc(std::__1::weak_ptr<devio::Device>)","symbolLocation":314,"imageIndex":5},{"imageOffset":9030145,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, void (devio::Device::*)(std::__1::weak_ptr<devio::Device>), devio::Device*, std::__1::weak_ptr<devio::Device> > >(void*)","symbolLocation":97,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296878,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48435,"symbol":"std::__1::condition_variable::__do_timed_wait(std::__1::unique_lock<std::__1::mutex>&, std::__1::chrono::time_point<std::__1::chrono::system_clock, std::__1::chrono::duration<long long, std::__1::ratio<1l, 1000000000l> > >)","symbolLocation":93,"imageIndex":11},{"imageOffset":9962533,"symbol":"devio::Timer::timer_thread_proc(int)","symbolLocation":165,"imageIndex":5},{"imageOffset":9966866,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, void (devio::Timer::*)(int), devio::Timer*, int> >(void*)","symbolLocation":66,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296883,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":8638426,"symbol":"devio::Device::write_thread_proc(std::__1::weak_ptr<devio::Device>)","symbolLocation":314,"imageIndex":5},{"imageOffset":9030145,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, void (devio::Device::*)(std::__1::weak_ptr<devio::Device>), devio::Device*, std::__1::weak_ptr<devio::Device> > >(void*)","symbolLocation":97,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296884,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48435,"symbol":"std::__1::condition_variable::__do_timed_wait(std::__1::unique_lock<std::__1::mutex>&, std::__1::chrono::time_point<std::__1::chrono::system_clock, std::__1::chrono::duration<long long, std::__1::ratio<1l, 1000000000l> > >)","symbolLocation":93,"imageIndex":11},{"imageOffset":9962533,"symbol":"devio::Timer::timer_thread_proc(int)","symbolLocation":165,"imageIndex":5},{"imageOffset":9966866,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, void (devio::Timer::*)(int), devio::Timer*, int> >(void*)","symbolLocation":66,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]},{"id":29296887,"frames":[{"imageOffset":140706056710464,"imageIndex":8},{"imageOffset":17386,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":9},{"imageOffset":27247,"symbol":"_pthread_cond_wait","symbolLocation":1249,"imageIndex":10},{"imageOffset":48290,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":11},{"imageOffset":8638426,"symbol":"devio::Device::write_thread_proc(std::__1::weak_ptr<devio::Device>)","symbolLocation":314,"imageIndex":5},{"imageOffset":9030145,"symbol":"void* std::__1::__thread_proxy<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct> >, void (devio::Device::*)(std::__1::weak_ptr<devio::Device>), devio::Device*, std::__1::weak_ptr<devio::Device> > >(void*)","symbolLocation":97,"imageIndex":5},{"imageOffset":25825,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":10},{"imageOffset":8043,"symbol":"thread_start","symbolLocation":15,"imageIndex":10}]}],
  "usedImages" : [
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703678599168,
    "CFBundleShortVersionString" : "6.9",
    "CFBundleIdentifier" : "com.apple.AppKit",
    "size" : 15261696,
    "uuid" : "92a78ebd-bba5-3f18-a5e1-768c955539d7",
    "path" : "\/System\/Library\/Frameworks\/AppKit.framework\/Versions\/C\/AppKit",
    "name" : "AppKit",
    "CFBundleVersion" : "2113.40.127"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703634964480,
    "CFBundleShortVersionString" : "6.9",
    "CFBundleIdentifier" : "com.apple.CoreFoundation",
    "size" : 5246976,
    "uuid" : "fa52ff10-225c-3a0f-bfcc-556795ccd233",
    "path" : "\/System\/Library\/Frameworks\/CoreFoundation.framework\/Versions\/A\/CoreFoundation",
    "name" : "CoreFoundation",
    "CFBundleVersion" : "1858.112"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703787286528,
    "CFBundleShortVersionString" : "2.1.1",
    "CFBundleIdentifier" : "com.apple.HIToolbox",
    "size" : 3096576,
    "uuid" : "7761967d-a138-33b6-9e3f-5c5420a2eeff",
    "path" : "\/System\/Library\/Frameworks\/Carbon.framework\/Versions\/A\/Frameworks\/HIToolbox.framework\/Versions\/A\/HIToolbox",
    "name" : "HIToolbox"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4701667328,
    "size" : 1503232,
    "uuid" : "d4ab240b-4535-3aec-b72b-5ffc4750e4e5",
    "path" : "\/Applications\/Logi Bolt.app\/Contents\/PlugIns\/platforms\/libqcocoa.dylib",
    "name" : "libqcocoa.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4594884608,
    "CFBundleShortVersionString" : "5.15",
    "CFBundleIdentifier" : "org.qt-project.QtCore",
    "size" : 5705728,
    "uuid" : "c723812a-f7a5-3001-98d5-e60e8daa6ffb",
    "path" : "\/Applications\/Logi Bolt.app\/Contents\/Frameworks\/QtCore.framework\/Versions\/5\/QtCore",
    "name" : "QtCore",
    "CFBundleVersion" : "5.15.2"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4370980864,
    "CFBundleShortVersionString" : "1.2",
    "CFBundleIdentifier" : "com.logi.bolt.app",
    "size" : 25387008,
    "uuid" : "04efd306-1d9c-3c0b-9507-578a3a4ee676",
    "path" : "\/Applications\/Logi Bolt.app\/Contents\/MacOS\/Logi Bolt",
    "name" : "Logi Bolt",
    "CFBundleVersion" : "1.2.6024"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 8706441216,
    "size" : 442368,
    "uuid" : "dd9e80de-fb3b-349b-96a4-46874ad34d11",
    "path" : "\/usr\/lib\/dyld",
    "name" : "dyld"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 140703127388160,
    "size" : 196608,
    "uuid" : "24497be3-a1b4-360a-b90e-cde9ce78a93b",
    "path" : "\/usr\/libexec\/rosetta\/runtime",
    "name" : "runtime"
  },
  {
    "size" : 0,
    "source" : "A",
    "base" : 0,
    "uuid" : "00000000-0000-0000-0000-000000000000"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703634419712,
    "size" : 229376,
    "uuid" : "26a59789-b846-3ed4-96dc-8dbef3c0c8e7",
    "path" : "\/usr\/lib\/system\/libsystem_kernel.dylib",
    "name" : "libsystem_kernel.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703634649088,
    "size" : 49152,
    "uuid" : "2f6c275d-7e14-3d31-a924-e1bb41d2415f",
    "path" : "\/usr\/lib\/system\/libsystem_pthread.dylib",
    "name" : "libsystem_pthread.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703633965056,
    "size" : 364544,
    "uuid" : "94af60f2-7351-357d-8d33-d1b719c36a95",
    "path" : "\/usr\/lib\/libc++.1.dylib",
    "name" : "libc++.1.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4659183616,
    "CFBundleShortVersionString" : "5.15",
    "CFBundleIdentifier" : "org.qt-project.QtQml",
    "size" : 3510272,
    "uuid" : "8d7b72bf-f1f8-35c9-88ac-c4b1bcac7127",
    "path" : "\/Applications\/Logi Bolt.app\/Contents\/Frameworks\/QtQml.framework\/Versions\/5\/QtQml",
    "name" : "QtQml",
    "CFBundleVersion" : "5.15.2"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703633403904,
    "size" : 561152,
    "uuid" : "8e54eca2-9bd8-3482-9589-b9574434d1aa",
    "path" : "\/usr\/lib\/system\/libsystem_c.dylib",
    "name" : "libsystem_c.dylib"
  }
],
  "sharedCache" : {
  "base" : 140703631392768,
  "size" : 15226814464,
  "uuid" : "a1c5d735-ceb0-350d-9729-bb0e9be86d75"
},
  "vmSummary" : "ReadOnly portion of Libraries: Total=1.0G resident=0K(0%) swapped_out_or_unallocated=1.0G(100%)\nWritable regions: Total=1.2G written=0K(0%) resident=0K(0%) swapped_out=0K(0%) unallocated=1.2G(100%)\n\n                                VIRTUAL   REGION \nREGION TYPE                        SIZE    COUNT (non-coalesced) \n===========                     =======  ======= \nAccelerate framework               256K        2 \nActivity Tracing                   256K        1 \nCG backing stores                 3520K        8 \nCG image                            12K        3 \nColorSync                          228K       25 \nCoreAnimation                       16K        2 \nCoreGraphics                         8K        2 \nCoreUI image data                  412K        4 \nFoundation                          16K        1 \nJS VM Gigacage                    8192K        2 \nJS VM Isolated Heap               8720K        8 \nJS VM Isolated Heap (reserved)    4080K        2         reserved VM address space (unallocated)\nKernel Alloc Once                    8K        1 \nMALLOC                           244.2M       43 \nMALLOC guard page                  192K        8 \nMALLOC_MEDIUM (reserved)         344.0M        3         reserved VM address space (unallocated)\nMALLOC_NANO (reserved)           384.0M        1         reserved VM address space (unallocated)\nOpenGL GLSL                        256K        3 \nRosetta Arena                     4096K        2 \nRosetta Generic                   1092K      270 \nRosetta IndirectBranch            1024K        1 \nRosetta JIT                      128.0M        1 \nRosetta Return Stack              2300K      230 \nRosetta Thread Context            2300K      230 \nSTACK GUARD                         16K        4 \nStack                             81.1M      136 \nStack Guard                       56.4M      111 \nVM_ALLOCATE                       3796K       70 \nVM_ALLOCATE (reserved)              24K        3         reserved VM address space (unallocated)\n__DATA                            21.6M      351 \n__DATA_CONST                      12.4M      184 \n__DATA_DIRTY                       546K      103 \n__FONT_DATA                          4K        1 \n__GLSLBUILTINS                    5176K        1 \n__LINKEDIT                       734.4M       46 \n__OBJC_RO                         82.6M        1 \n__OBJC_RW                         3200K        2 \n__TEXT                           284.6M      361 \n__UNICODE                          592K        1 \ndyld private memory               1184K        3 \nmapped file                        5.5G      560 \nshared memory                      808K       16 \nunshared pmap                     10.4M        7 \n===========                     =======  ======= \nTOTAL                              7.9G     2814 \nTOTAL, minus reserved VM space     7.2G     2814 \n",
  "legacyInfo" : {
  "threadTriggered" : {
    "queue" : "com.apple.main-thread"
  }
},
  "trialInfo" : {
  "rollouts" : [
    {
      "rolloutId" : "5fb4245a1bbfe8005e33a1e1",
      "factorPackIds" : {

      },
      "deploymentId" : 240000015
    },
    {
      "rolloutId" : "60356660bbe37970735c5624",
      "factorPackIds" : {

      },
      "deploymentId" : 240000027
    }
  ],
  "experiments" : [

  ]
}
}

Model: MacBookAir10,1, BootROM 7459.101.3, proc 8:4:4 processors, 8 GB, SMC
Graphics: Apple M1, Apple M1, Built-In
Display: LG HDR WQHD, 3440 x 1440 (UWQHD - Ultra-Wide Quad HD), Main, MirrorOff, Online
Display: Color LCD, 2560 x 1600 Retina, MirrorOff, Online
Memory Module: LPDDR4
AirPort: Wi-Fi, wl0: Feb  8 2022 01:44:45 version 18.60.21.0.7.8.126 FWID 01-1cdae627
Bluetooth: Version (null), 0 services, 0 devices, 0 incoming serial ports
Network Service: Wi-Fi, AirPort, en0
USB Device: USB31Bus
USB Device: USB31Bus
USB Device: USB2.1 Hub
USB Device: USB Receiver
Thunderbolt Bus: MacBook Air, Apple Inc.
Thunderbolt Bus: MacBook Air, Apple Inc.
script>
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  created: function () {},
  methods: {},
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<style></style>
