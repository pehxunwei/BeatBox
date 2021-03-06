#include "Plot.h"

Plot::Plot( const __FlashStringHelper *Context, Print &rDestination )
  : MegunoLinkProtocol(Context, rDestination)
{

}

Plot::Plot( const __FlashStringHelper *Context, const char *Channel, Print &rDestination  )
  : MegunoLinkProtocol(Context, Channel, rDestination)
{

}

Plot::Plot( const __FlashStringHelper *Context, const __FlashStringHelper *Channel, Print &rDestination )
  : MegunoLinkProtocol(Context, Channel, rDestination)
{

}

void Plot::SetTitle(const char *title)
{
  SetParameter(F("title"), title);
}

void Plot::SetXlabel(const char *xlabel)
{
  SetParameter(F("x-label"), xlabel);
}

void Plot::SetYlabel(const char *ylabel)
{
  SetParameter(F("y-label"), ylabel);
}

void Plot::SetTitle(const __FlashStringHelper *title)
{
  SetParameter(F("title"), title);
}

void Plot::SetXlabel(const __FlashStringHelper *xlabel)
{
  SetParameter(F("x-label"), xlabel);
}

void Plot::SetYlabel(const __FlashStringHelper *ylabel)
{
  SetParameter(F("y-label"), ylabel);
}

void Plot::SetSeriesProperties(const char *SeriesName, Colors Color, LineStyle Line, uint8_t uLineWidth, MarkerStyle Marker )
{
  char Data[5] = {':', Color, Marker, Line, '\0'};

  SendDataHeader(F("STYLE"));
  m_rDestination.print(SeriesName);
  m_rDestination.print(Data);
  m_rDestination.print(uLineWidth);
  SendDataTail();
}

void Plot::SetSeriesProperties(const __FlashStringHelper *SeriesName, Colors Color, LineStyle Line, uint8_t uLineWidth, MarkerStyle Marker )
{
  char Data[5] = {':', Color, Marker, Line, '\0'};

  SendDataHeader(F("STYLE"));
  m_rDestination.print(SeriesName);
  m_rDestination.print(Data);
  m_rDestination.print(uLineWidth);
  SendDataTail();
}

void Plot::SetSeriesProperties(const char *SeriesName, const char *SeriesProperties )
{
  SendDataHeader(F("STYLE"));
  m_rDestination.print(SeriesName);
  m_rDestination.print(':');
  m_rDestination.print(SeriesProperties);
  SendDataTail();
}

void Plot::SetSeriesProperties(const __FlashStringHelper *SeriesName, const char *SeriesProperties )
{
  SendDataHeader(F("STYLE"));
  m_rDestination.print(SeriesName);
  m_rDestination.print(':');
  m_rDestination.print(SeriesProperties);
  SendDataTail();
}

void Plot::SetSeriesProperties(const __FlashStringHelper *SeriesName, const __FlashStringHelper *SeriesProperties )
{
  SendDataHeader(F("STYLE"));
  m_rDestination.print(SeriesName);
  m_rDestination.print(':');
  m_rDestination.print(SeriesProperties);
  SendDataTail();
}

void Plot::SetParameter(const __FlashStringHelper *pfstrParameter, const char * Value )
{
  SendDataHeader(F("SET"));
  m_rDestination.print(pfstrParameter);
  m_rDestination.print('=');
  m_rDestination.print(Value);
  SendDataTail();
}

void Plot::SetParameter( const __FlashStringHelper *pfstrParameter, const __FlashStringHelper * Value )
{
  SendDataHeader(F("SET"));
  m_rDestination.print(pfstrParameter);
  m_rDestination.print('=');
  m_rDestination.print(Value);
  SendDataTail();
}

void Plot::SendSeriesProperties( const char *SeriesProperties )
{
  if (SeriesProperties != NULL)
  {
    m_rDestination.print(':');
    m_rDestination.print(SeriesProperties);
  }
  m_rDestination.print('|');
}

void Plot::SendSeriesProperties( const __FlashStringHelper *SeriesProperties )
{
  if (SeriesProperties != NULL)
  {
    m_rDestination.print(':');
    m_rDestination.print(SeriesProperties);
  }
  m_rDestination.print('|');
}

void Plot::SendSeriesProperties( Colors Color, LineStyle Line, uint8_t uLineWidth, MarkerStyle Marker )
{
  char Data[5] = {':', Color, Marker, Line, '\0'};

  m_rDestination.print(Data);
  if (Line != NoLine)
    m_rDestination.print(uLineWidth);
  m_rDestination.print('|');
}

void Plot::Clear()
{
  SendDataHeader(F("CLEAR"));
  SendDataTail();
}

void Plot::Clear(const char *SeriesName)
{
  SendDataHeader(F("CLEAR"));
  m_rDestination.print(SeriesName);
  SendDataTail();
}

void Plot::Clear(const __FlashStringHelper *SeriesName)
{
  SendDataHeader(F("CLEAR"));
  m_rDestination.print(SeriesName);
  SendDataTail();
}

void Plot::SendHeader_Data()
{
  SendDataHeader(F("DATA"));
}

void Plot::SendTimeSeparator()
{
  m_rDestination.print(F("T|"));
}

void Plot::SetYRange(float fYLimLower, float fYLimUpper)
{
	SendDataHeader(F("yrange"));
	m_rDestination.print(fYLimLower, 5);
	m_rDestination.print("|");
	m_rDestination.print(fYLimUpper, 5);
	SendDataTail();
}